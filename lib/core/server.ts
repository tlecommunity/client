import Lacuna from '../lacuna';
import _ from 'lodash';
import axios from 'axios';
import { fixNumbers } from './util';

export interface ServerRequest {
  module: string;
  method: string;
  params: object | Array<any>;
  addSession: boolean;
}

export interface ServerResponse<T> {
  result?: T;
  error?: ServerError;
}

export interface ServerError {
  code: number;
  message: string;
  data: any;
}

export interface RequestBody {
  jsonrpc: '2.0';
  id: number;
  method: string;
  params: object | Array<any>;
}

class Server {
  lacuna: Lacuna;
  id: number;

  constructor(lacuna: Lacuna) {
    this.lacuna = lacuna;
    this.id = 1;
  }

  addSession(options: ServerRequest) {
    const sessionId = this.lacuna.session.get();

    if (options.addSession === true && sessionId) {
      if (_.isArray(options.params)) {
        options.params = [sessionId].concat(options.params);
      } else {
        this.lacuna.log.warn(
          `${_.capitalize(options.module)}#${
            options.method
          } called with named args. This is probably an error!`
        );
        options.params = { ...options.params, session_id: sessionId };
      }
    }

    return options;
  }

  createBody(options: ServerRequest): RequestBody {
    return {
      jsonrpc: '2.0',
      id: 1,
      method: options.method,
      params: options.params,
    };
  }

  createUrl(options: ServerRequest) {
    return new URL(options.module, this.lacuna.config.serverUrl).href;
  }

  async sendRequest<T>(
    url: string,
    data: string,
    options: ServerRequest,
    retry: Function
  ): Promise<ServerResponse<T>> {
    this.lacuna.log.info('Calling', `${options.module}/${options.method}`, options.params);

    try {
      const response = await axios<ServerResponse<T>>({
        url,
        data: data,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.statusText === 'ok') {
        const result = fixNumbers(response.data.result);

        if (result) {
          if (result.status) {
            // splitStatus(result.status);
          } else if (options.method === 'get_status') {
            // splitStatus(result);
          }
        }

        return { result };
      }
    } catch (e) {
      // MenuStore.hideLoader();
      const error: ServerError = e?.response?.data?.error || {
        code: -1,
        message: e.response.responseText || 'Could not communicate with server',
        data: {},
      };

      if (error.code === 1016) {
        // TODO: implement captcha handling.
        this.lacuna.log.error('Captcha requested but we cannot handle it');
      } else {
        // TODO
        console.error(error.code, error.message, error.data);
      }

      return { error };
    }

    return {};
  }

  call<T>(obj: ServerRequest) {
    // MenuStore.showLoader();

    const options = this.addSession(obj);
    const body = this.createBody(options);
    const data = JSON.stringify(body);
    const url = this.createUrl(options);

    const retry = async () => {
      await this.call(obj);
    };

    return this.sendRequest<T>(url, data, options, retry);
  }
}

export default Server;
