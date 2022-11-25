import Lacuna from '../lacuna';

abstract class Endpoint {
  abstract lacuna: Lacuna;
  abstract url: string;

  callWithSession(method: string, params: any) {
    return this.lacuna.server.call({ module: this.url, method, params, addSession: true });
  }

  callWithoutSession(method: string, params: any) {
    return this.lacuna.server.call({ module: this.url, method, params, addSession: false });
  }
}

export default Endpoint;
