import Lacuna from '../lacuna';
import Endpoint from '../core/endpoint';
import * as S from '../types/stats';

class Empire extends Endpoint {
  lacuna: Lacuna;
  url: string;

  constructor(lacuna: Lacuna, url: string) {
    super();
    this.lacuna = lacuna;
    this.url = url;
  }

  credits() {
    return this.callWithSession<S.CreditsResult>('credits', []);
  }
}

export default Empire;
