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
    return this.callWithSession('fetch_captcha', []);
  }

  viewBoosts(params: E.ViewBoostsParams = {}): Promise<E.ViewBoostsResult> {
    return this.callWithSession('view_boosts', []);
  }

  getStatus(params: E.GetStatusParams = {}): Promise<E.GetStatusResponse> {
    return this.callWithSession('get_status', []);
  }

  login(params: E.LoginParams): Promise<E.LoginResponse> {
    return this.callWithoutSession('login', [
      params.name,
      params.password,
      params.api_key,
      params.browser,
    ]);
  }

  logout(): Promise<E.LogoutResponse> {
    return this.callWithSession('logout', []);
  }

  setBoost(params: E.BoostParams): Promise<E.ViewBoostsResult> {
    return this.callWithSession('set_boost', [params.type, params.weeks]);
  }
}

export default Empire;
