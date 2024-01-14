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

  fetch(params: C.FetchParams = {}) {
    return this.callWithSession<C.FetchResponse>('fetch', []);
  }

  solve(params: C.SolveParams) {
    return this.callWithSession<C.SolveResponse>('solve', [params.guid, params.solution]);
  }
}

export default Captcha;
