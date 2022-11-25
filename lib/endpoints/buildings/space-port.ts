import Lacuna from '../../lacuna';
import Building from '../building';
import * as SP from '../../types/space-port';

class SpacePort extends Building {
  constructor(lacuna: Lacuna, url: string) {
    super(lacuna, url);
  }

  viewAllFleets(params: SP.ViewAllFleetsParams): Promise<SP.ViewAllFleetsResponse> {
    return this.callWithSession('view_all_fleets', params);
  }
}

export default SpacePort;
