import { RpcModule } from '../types';
import Lacuna from '../lacuna';

class Body implements RpcModule {
  lacuna: Lacuna;

  constructor(lacuna: Lacuna) {
    this.lacuna = lacuna;
  }

  url() {
    return '/body';
  }
}

export default Body;
