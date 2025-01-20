export interface BentoFeature {
  title: string;
  description: string;
  content: (() => JSX.Element) | null;
  className: string;
}
