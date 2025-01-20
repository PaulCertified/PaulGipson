import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

type Uniforms = {
  [key: string]: {
    value: number[] | number[][] | number;
    type: string;
  };
};

export const ShaderMaterial = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>();
  let lastFrameTime = 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) {
      return;
    }
    lastFrameTime = timestamp;

    const material: any = ref.current.material;
    const timeLocation = material.uniforms.u_time;
    timeLocation.value = timestamp;
  });

  const material = useMemo(() => {
    const preparedUniforms = getUniforms(uniforms, size);
    
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main(){
          float x = position.x;
          float y = position.y;
          gl_Position = vec4(x, y, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: preparedUniforms,
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [size.width, size.height, source]);

  return (
    <mesh ref={ref as any}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

function getUniforms(uniforms: Uniforms, size: { width: number; height: number }) {
  const preparedUniforms: any = {};

  for (const uniformName in uniforms) {
    const uniform: any = uniforms[uniformName];

    switch (uniform.type) {
      case "uniform1f":
        preparedUniforms[uniformName] = { value: uniform.value };
        break;
      case "uniform3f":
        preparedUniforms[uniformName] = {
          value: new THREE.Vector3().fromArray(uniform.value)
        };
        break;
      case "uniform1fv":
        preparedUniforms[uniformName] = { value: uniform.value };
        break;
      case "uniform3fv":
        preparedUniforms[uniformName] = {
          value: uniform.value.map((v: number[]) =>
            new THREE.Vector3().fromArray(v)
          )
        };
        break;
      case "uniform2f":
        preparedUniforms[uniformName] = {
          value: new THREE.Vector2().fromArray(uniform.value)
        };
        break;
      default:
        console.error(`Invalid uniform type for '${uniformName}'.`);
        break;
    }
  }

  preparedUniforms["u_time"] = { value: 0 };
  preparedUniforms["u_resolution"] = {
    value: new THREE.Vector2(size.width * 2, size.height * 2)
  };

  return preparedUniforms;
}
