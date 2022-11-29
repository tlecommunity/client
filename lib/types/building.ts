import { ServerDate } from '../types';

export interface Building {
  id: number;
  name: string;
  image: string;
  level: number;
  x: number;
  y: number;
  food_hour: number;
  food_capacity: number;
  energy_hour: number;
  energy_capacity: number;
  ore_hour: number;
  ore_capacity: number;
  water_hour: number;
  water_capacity: number;
  waste_hour: number;
  waste_capacity: number;
  happiness_hour: number;
  efficiency: number;
  url: string;

  // Essentia Vein
  drain_capable?: number;

  repair_costs: {
    food: number;
    water: number;
    energy: number;
    ore: number;
  };

  downgrade: {
    can: number;
    reason: any[];
    image: string;
  };

  upgrade: {
    can: number;
    reason: any[];

    cost: {
      food: number;
      water: number;
      energy: number;
      waste: number;
      ore: number;
      time: number;
      halls: number;
    };
    production: {
      food_hour: number;
      food_capacity: number;
      energy_hour: number;
      energy_capacity: number;
      ore_hour: number;
      ore_capacity: number;
      water_hour: number;
      water_capacity: number;
      waste_hour: number;
      waste_capacity: number;
      happiness_hour: number;
    };
    image: string;
  };
}

export interface SpyTrainingBuilding extends Building {
  spies: {
    max_points: number;
    points_per: number;
    in_training: number;
  };
}

export interface ViewParams {
  building_id: number;
}

export interface ViewResponse {
  building: Building;
}

export interface UpgradeParams {
  building_id: number;
}

export interface UpgradeResponse {
  building: {
    id: number;
    pending_build: {
      seconds_remaining: number;
      start: ServerDate;
      end: ServerDate;
    };
    level: number;
  };
}

export interface DowngradeParams {
  building_id: number;
}

export interface DowngradeResponse {}

export interface DemolishParams {
  building_id: number;
}

export interface DemolishResponse {
  building: Building;
}
