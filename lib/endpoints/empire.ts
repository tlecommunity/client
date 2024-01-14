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

  fetchCaptcha(params: E.FetchCaptchaParams = {}) {
    return this.callWithSession<E.FetchCaptchaResponse>('fetch_captcha', []);
  }

  viewBoosts(params: E.ViewBoostsParams = {}) {
    return this.callWithSession<E.ViewBoostsResult>('view_boosts', []);
  }

  getStatus(params: E.GetStatusParams = {}) {
    return this.callWithSession<E.GetStatusResponse>('get_status', []);
  }

  login(params: E.LoginParams) {
    return this.callWithoutSession<E.LoginResponse>('login', [
      params.name,
      params.password,
      params.api_key,
      params.browser,
    ]);
  }

  logout() {
    return this.callWithSession<E.LogoutResponse>('logout', []);
  }

  setBoost(params: E.BoostParams) {
    return this.callWithSession<E.ViewBoostsResult>('set_boost', [params.type, params.weeks]);
  }
}

export default Empire;
