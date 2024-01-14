import Lacuna from '../../lacuna';
import Building from '../building';
import * as SY from '../../types/shipyard';

class Shipyard extends Building {
  constructor(lacuna: Lacuna, url: string) {
    super(lacuna, url);
  }

  viewBuildQueue(params: SY.ViewBuildQueueParams) {
    return this.callWithSession<SY.ViewBuildQueueResponse>('view_build_queue', params);
  }

  subsidizeBuildQueue(params: SY.SubsidizeBuildQueueParams) {
    return this.callWithSession<SY.SubsidizeBuildQueueResponse>('subsidize_build_queue', params);
  }

  getBuildable(params: SY.GetBuildableParams) {
    return this.callWithSession<SY.GetBuildableResponse>('get_buildable', params);
  }

  buildFleet(params: SY.BuildFleetParams) {
    return this.callWithSession<SY.BuildFleetResponse>('build_fleet', params);
  }
}

export default Shipyard;
