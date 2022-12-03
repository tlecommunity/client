import Lacuna from '../../lacuna';
import Building from '../building';
import * as EV from '../../types/essentia-vein';

class SpacePort extends Building {
  constructor(lacuna: Lacuna, url: string) {
    super(lacuna, url);
  }

  drain(params: EV.DrainParams): Promise<EV.DrainResponse> {
    return this.callWithSession('drain', params);
  }
}

export default SpacePort;
