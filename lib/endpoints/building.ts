import Lacuna from '../lacuna';
import Endpoint from '../core/endpoint';
import * as B from '../types/building';

class Building extends Endpoint {
  lacuna: Lacuna;
  url: string;

  constructor(lacuna: Lacuna, url: string) {
    super();
    this.lacuna = lacuna;
    this.url = url;
  }

  view(params: B.ViewParams): Promise<B.ViewResponse> {
    return this.callWithSession('view', params);
  }

  upgrade(params: B.UpgradeParams): Promise<B.UpgradeResponse> {
    return this.callWithSession('upgrade', params);
  }

  downgrade(params: B.DowngradeParams): Promise<B.DowngradeResponse> {
    return this.callWithSession('downgrade', params);
  }

  demolish(params: B.DemolishParams): Promise<B.DemolishResponse> {
    return this.callWithSession('demolish', params);
  }
}

export default Building;
