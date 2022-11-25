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

  getBodyStatus(params: B.GetBodyStatusParams): Promise<B.GetBodyStatusResponse> {
    return this.callWithSession('get_body_status', params);
  }

  getBuildings(params: B.GetBuildingsParams): Promise<B.GetBuildingsResponse> {
    return this.callWithSession('get_buildings', params);
  }

  getStatus(params: B.GetStatusParams): Promise<B.GetStatusResponse> {
    return this.callWithSession('get_status', params);
  }

  rearrangeBuildings(params: B.RearrangeBuildingsParams): Promise<B.RearrangeBuildingsResponse> {
    return this.callWithSession('rearrange_buildings', params);
  }
}

export default Body;
