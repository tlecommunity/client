import Lacuna from '../../lacuna';
import Building from '../building';
import * as SY from '../../types/shipyard';

class Shipyard extends Building {
  constructor(lacuna: Lacuna, url: string) {
    super(lacuna, url);
  }

  viewBuildQueue(params: SY.ViewBuildQueueParams): Promise<SY.ViewBuildQueueResponse> {
    return this.callWithSession('view_build_queue', params);
  }

  subsidizeBuildQueue(
    params: SY.SubsidizeBuildQueueParams
  ): Promise<SY.SubsidizeBuildQueueResponse> {
    return this.callWithSession('subsidize_build_queue', params);
  }

  getBuildable(params: SY.GetBuildableParams): Promise<SY.GetBuildableResponse> {
    return this.callWithSession('get_buildable', params);
  }

  buildFleet(params: SY.BuildFleetParams): Promise<SY.BuildFleetResponse> {
    return this.callWithSession('build_fleet', params);
  }
}

export default Shipyard;
