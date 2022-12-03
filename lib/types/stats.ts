export interface StatsCreditsParams {}

export interface CreditsResult {
  [index: number]: {
    [index: string]: string[];
  };
}
