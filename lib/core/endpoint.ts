import Lacuna from '../lacuna';

abstract class Endpoint {
  abstract lacuna: Lacuna;
  abstract url: string;

  callWithSession<T>(method: string, params: any) {
    return this.lacuna.server.call<T>({ module: this.url, method, params, addSession: true });
  }

  callWithoutSession<T>(method: string, params: any) {
    return this.lacuna.server.call<T>({ module: this.url, method, params, addSession: false });
  }
}

export default Endpoint;
