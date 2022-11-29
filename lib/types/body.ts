import { StatusBlock } from './status';

export interface BuildingSummary {
  efficiency: number;
  name: string;
  x: number;
  image: string;
  y: number;
  level: number;
  url: string;
}

export interface GetBuildingsParams {
  body_id: number;
}

export interface GetBuildingsResponse {
  body: {
    surface_image: string;
  };
  buildings: {
    [index: string]: BuildingSummary;
  };
}

export interface GetStatusParams {
  body_id: number;
}

export interface GetStatusResponse extends StatusBlock {}

export interface GetBodyStatusParams {
  body_id: number;
}

export interface GetBodyStatusResponse {
  body: {
    id: number;
    x: number;
    y: number;
    zone: string;
    star_id: number;
    star_name: string;
    orbit: number;
    type: string;
    name: string;
    image: string;
    size: number;
    water: number;

    ore: {
      anthracite: number;
      bauxite: number;
      beryl: number;
      chromite: number;
      chalcopyrite: number;
      fluorite: number;
      galena: number;
      goethite: number;
      gold: number;
      gypsum: number;
      halite: number;
      kerogen: number;
      magnetite: number;
      methane: number;
      monazite: number;
      rutile: number;
      sulfur: number;
      trona: number;
      uraninite: number;
      zircon: number;
    };
  };
}

export interface RearrangeBuildingsParams {
  body_id: number;
  arrangement: Array<{
    id: number;
    x: number;
    y: number;
  }>;
}

export interface RearrangeBuildingsResponse {
  body: {
    surface_image: string;
  };
  moved: Array<{
    name: string;
    x: number;
    y: number;
    id: string;
  }>;
}
