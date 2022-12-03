import * as Body from './body';
import * as Building from './building';
import * as Captcha from './captcha';
import * as Empire from './empire';
import * as EssentiaVein from './essentia-vein';
import * as Shipyard from './shipyard';
import * as SpacePort from './space-port';
import * as Stats from './stats';
import * as Status from './status';

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

export { Body, Building, Captcha, Empire, EssentiaVein, Shipyard, SpacePort, Stats, Status };
