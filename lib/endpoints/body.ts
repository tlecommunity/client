import Lacuna from '../lacuna';
import Endpoint from '../core/endpoint';
import * as B from '../types/body';

class Body extends Endpoint {
  lacuna: Lacuna;
  url: string;

  constructor(lacuna: Lacuna, url: string) {
    super();
    this.lacuna = lacuna;
    this.url = url;
  }

  getBuildings(params: B.GetBuildingsParams) {
    return this.callWithSession<B.GetBuildingsResponse>('get_buildings', [params.body_id]);
  }

  getStatus(params: B.GetStatusParams) {
    return this.callWithSession<B.GetStatusResponse>('get_status', [params.body_id]);
  }

  rearrangeBuildings(params: B.RearrangeBuildingsParams) {
    return this.callWithSession<B.RearrangeBuildingsResponse>('rearrange_buildings', [
      params.body_id,
      params.arrangement,
    ]);
  }
}

export default Body;
