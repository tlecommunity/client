import Lacuna from '../lacuna';
import Endpoint from '../core/endpoint';
import * as C from '../types/captcha';

class Captcha extends Endpoint {
  lacuna: Lacuna;
  url: string;

  constructor(lacuna: Lacuna, url: string) {
    super();
    this.lacuna = lacuna;
    this.url = url;
  }

  fetch(params: C.FetchParams = {}): Promise<C.FetchResponse> {
    return this.callWithSession('fetch', params);
  }

  solve(params: C.SolveParams): Promise<C.SolveResponse> {
    return this.callWithSession('solve', params);
  }
}

export default Captcha;
