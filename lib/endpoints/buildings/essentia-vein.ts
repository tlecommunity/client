import Lacuna from '../../lacuna';
import Building from '../building';
import * as EV from '../../types/essentia-vein';

class EssentiaVein extends Building {
  constructor(lacuna: Lacuna, url: string) {
    super(lacuna, url);
  }

  drain(params: EV.DrainParams) {
    return this.callWithSession<EV.DrainResponse>('drain', [params.buildingId, params.times]);
  }
}

export default EssentiaVein;
