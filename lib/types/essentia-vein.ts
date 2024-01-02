import { Building } from './building';

export interface DrainParams {
  buildingId: number;
  times: number;
}

export interface DrainResponse {
  building: Building;
}
