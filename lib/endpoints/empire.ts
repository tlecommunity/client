import Lacuna from '../lacuna';
import Endpoint from '../core/endpoint';
import * as E from '../types/empire';

class Empire extends Endpoint {
  lacuna: Lacuna;
  url: string;

  constructor(lacuna: Lacuna, url: string) {
    super();
    this.lacuna = lacuna;
    this.url = url;
  }

  fetchCaptcha(params: E.FetchCaptchaParams = {}): Promise<E.FetchCaptchaResponse> {
    return this.callWithSession('fetch_captcha', params);
  }

  getBoosts(params: E.GetBoostsParams = {}): Promise<E.GetBoostsResult> {
    return this.callWithSession('get_boosts', params);
  }

  getStatus(params: E.GetStatusParams = {}): Promise<E.GetStatusResponse> {
    return this.callWithSession('get_status', params);
  }

  login(params: E.LoginParams): Promise<E.LoginResponse> {
    return this.callWithoutSession('login', params);
  }

  logout(params: E.LogoutParams = {}): Promise<E.LogoutResponse> {
    return this.callWithSession('logout', params);
  }

  setBoost(params: E.BoostParams): Promise<E.GetBoostsResult> {
    return this.callWithSession('set_boost', params);
  }
}

export default Empire;
