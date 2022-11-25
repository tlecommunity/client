export type ServerDate = string;
export type EmpireName = string;
export type IntBool = 0 | 1;
export type MapLocation = { 0: number; 1: number };

export interface LacunaConfig {
  empireName?: string;
  password?: string;
  apiKey?: string;
  fingerprintToken?: string;
  serverUrl: string;
}
