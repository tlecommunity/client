import { RpcModule } from '../types';
import Lacuna from '../lacuna';

class Buildings implements RpcModule {
  lacuna: Lacuna;

  constructor(lacuna: Lacuna) {
    this.lacuna = lacuna;
  }

  url() {
    return '/buildings';
  }
}

export default Buildings;
