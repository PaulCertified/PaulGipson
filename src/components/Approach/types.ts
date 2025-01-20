export interface Phase {
  number: number;
  title: string;
  description: string;
}

export interface ApproachConfig {
  title: string;
  highlightedWord: string;
  phases: Phase[];
}
