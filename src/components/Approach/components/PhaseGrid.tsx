import React from 'react';
import { PhaseCard } from './PhaseCard';
import type { Phase } from '../types';

interface PhaseGridProps {
  phases: Phase[];
  hoveredPhase: number | null;
  onPhaseHover: (phase: number | null) => void;
}

const COLOR_SCHEMES = ['purple', 'blue', 'cyan'] as const;

export const PhaseGrid: React.FC<PhaseGridProps> = ({
  phases,
  hoveredPhase,
  onPhaseHover,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto px-4 md:px-6">
      {phases.map((phase, index) => (
        <PhaseCard
          key={phase.number}
          {...phase}
          isHovered={hoveredPhase === phase.number}
          onHover={() => onPhaseHover(phase.number)}
          onLeave={() => onPhaseHover(null)}
          colorScheme={COLOR_SCHEMES[index]}
        />
      ))}
    </div>
  );
};
