import { ServerDate, IntBool } from '.';
import { EmpireBlock, ServerBlock } from './status';

export interface CreateParams {
  name: string;
  password: string;
  password1: string;
  captcha_guid: string;
  captcha_solution: string;
  email: string;
  invite_code?: string;
}

export interface CreateResponse {
  empire_id: number;
}

export interface GetBoostsParams {}

export interface GetBoostsResult {
  boosts: {
    food: ServerDate;
    ore: ServerDate;
    energy: ServerDate;
    water: ServerDate;
    happiness: ServerDate;
    storage: ServerDate;
    building: ServerDate;
    spy_training: ServerDate;
  };
}

export interface BoostParams {
  type: string;
  weeks?: number;
}

export interface GetStatusParams {}

export interface GetStatusResponse {
  status: {
    empire: EmpireBlock;
    server: ServerBlock;
  };
}

export interface FetchCaptchaParams {}

export interface FetchCaptchaResponse {
  guid: string;
  url: string;
}

export interface LoginParams {
  name: string;
  password: string;
  api_key: string;
  browser: string;
}

export interface LoginResponse {
  session_id: string;
}

export interface LogoutParams {}

export interface LogoutResponse {
  logout: IntBool;
}
