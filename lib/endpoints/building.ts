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

  view(params: B.ViewParams) {
    return this.callWithSession<B.ViewResponse>('view', [params.building_id]);
  }

  upgrade(params: B.UpgradeParams) {
    return this.callWithSession<B.UpgradeResponse>('upgrade', [params.building_id]);
  }

  downgrade(params: B.DowngradeParams) {
    return this.callWithSession<B.DowngradeResponse>('downgrade', [params.building_id]);
  }

  demolish(params: B.DemolishParams) {
    return this.callWithSession<B.DemolishResponse>('demolish', [params.building_id]);
  }
}

export default Building;
