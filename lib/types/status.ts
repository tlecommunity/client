import { ServerDate, IntBool, EmpireName, MapLocation } from '.';

export interface BodiesList {
  empire_id: number;
  empire_name: string;
  id: number;
  name: string;
  orbit: number;
  x: number;
  y: number;
  zone: string;
  type: string;
}

export interface EmpireBlock {
  bodies: {
    colonies: BodiesList[];
    mystations?: BodiesList[];
    ourstations?: BodiesList[];
    babies?: {
      [index: string]: {
        alliance_id?: number;
        id: number;
        has_new_messages: number;
        bodies: BodiesList[];
      };
    };
  };
  essentia: number;
  has_new_messages: number;
  home_planet_id: number;
  id: number;
  insurrect_value: number;
  is_isolationist: IntBool;
  latest_message_id: number;
  name: EmpireName;
  next_colony_cost: number;
  next_colony_srcs: number;
  next_station_cost: number;
  primary_embassy_id: number;
  rpc_count: number;
  self_destruct_active: IntBool;
  self_destruct_date: ServerDate;
  status_message: string;
  tech_level: number;
}

export interface BodyBlock {
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

    //
    // This section only exists if an empire occupies it
    //
    empire?: {
      id: number;
      name: string;
      alignment: 'ally' | 'self' | 'hostile';
      is_isolationist: IntBool;
    };

    //
    // This section is included if the body is under the influence of a space station
    //
    station?: {
      id: number;
      x: number;
      y: number;
      name: string;
    };

    //
    // If the body belongs to us then extra information is included
    //
    needs_surface_refresh?: IntBool;
    building_count?: number;
    build_queue_size?: number;
    build_queue_len?: number;
    plots_available?: number;
    happiness?: number;
    happiness_hour?: number;
    unhappy_date?: ServerDate;
    neutral_entry?: ServerDate;
    propaganda_boost?: number;
    food_stored?: number;
    food_capacity?: number;
    food_hour?: number;
    energy_stored?: number;
    energy_capacity?: number;
    energy_hour?: number;
    ore_hour?: number;
    ore_capacity?: number;
    ore_stored?: number;
    population?: number;
    waste_hour?: number;
    waste_stored?: number;
    waste_capacity?: number;
    water_stored?: number;
    water_hour?: number;
    water_capacity?: number;
    skip_incoming_ships?: IntBool;
    num_incoming_enemy?: number;
    num_incoming_ally?: number;
    num_incoming_own?: number;
    incoming_enemy_ships?: any[];
    incoming_ally_ships?: any[];
    incoming_own_ships?: any[];

    //
    // If the body is a station the follwing information will be included:
    //
    alliance?: {
      id: number;
      name: string;
    };

    influence?: {
      total: number;
      spent: number;
    };
  };
}

export interface ServerBlock {
  rpc_limit: number;
  star_map_size: {
    x: MapLocation;
    y: MapLocation;
    z: MapLocation;
  };
  time: string;
  version: string;
}

export interface StatusBlock {
  empire?: EmpireBlock;
  body?: BodyBlock;
  server?: ServerBlock;
}
