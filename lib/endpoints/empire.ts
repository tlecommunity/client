import { RpcModule } from '../types';
import Lacuna from '../lacuna';
import { EmpireLoginParams, EmpireLoginResponse } from '../types/empire';

class Empire implements RpcModule {
  lacuna: Lacuna;

  constructor(lacuna: Lacuna) {
    this.lacuna = lacuna;
  }

  url() {
    return '/empire';
  }

  login(params: EmpireLoginParams): Promise<EmpireLoginResponse> {
    return this.lacuna.server.call({
      module: 'empire',
      method: 'login',
      addSession: false,
      params: params,
    });
  }
}

export default Empire;
