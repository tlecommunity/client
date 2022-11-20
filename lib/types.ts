import Lacuna from './lacuna';
import { EmpireGetStatusResponse } from './types/empire';
import { BodyGetStatusResponse } from './types/body';

export type ServerDate = string;
export type EmpireName = string;
export type IntBool = 0 | 1;

export interface StatusBlock {
  empire?: EmpireGetStatusResponse['empire'];
  body?: BodyGetStatusResponse['body'];
  server?: EmpireGetStatusResponse['server'];
}

export interface RpcModule {
  url(): string;
  lacuna: Lacuna;
}

export interface LacunaConfig {
  empireName?: string;
  password?: string;
  apiKey?: string;
  fingerprintToken?: string;
  serverUrl: string;
}
