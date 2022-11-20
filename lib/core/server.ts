import Lacuna from '../lacuna';
import _ from 'lodash';
import axios from 'axios';
import { fixNumbers } from './util';

interface ServerRequest {
  module: string;
  method: string;
  params: object | Array<any>;
  addSession: boolean;
}

interface ServerError {
  code: number;
  message: string;
}

interface RequestBody {
  jsonrpc: '2.0';
  id: number;
  method: string;
  params: object | Array<any>;
}

class Server {
  lacuna: Lacuna;
  id: Number;

  constructor(lacuna: Lacuna) {
    this.lacuna = lacuna;
    this.id = 1;
  }

  addSession(options: ServerRequest) {
    const sessionId = this.lacuna.session.get();

    if (options.addSession === true && sessionId) {
      if (_.isArray(options.params)) {
        this.lacuna.log.warn(`${_.capitalize(options.module)}#${options.method} called with positional args. This will go away very soon!`);
        options.params = [sessionId].concat(options.params);
      } else {
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
    return this.lacuna.config.serverUrl + options.module;
  }

  async sendRequest(url: string, data: string, options: ServerRequest, retry: Function) {
    this.lacuna.log.info('Calling', `${options.module}/${options.method}`, options.params);

    try {
      const response = await axios({
        url,
        data: data,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        }
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

        return result;
      }
    } catch (e) {
      // MenuStore.hideLoader();
      const error: ServerError = e?.response?.data?.error || {
        code: -1,
        message: e.response.responseText || 'Could not communicate with server',
      };

      if (error.code === 1016) {
        // TODO: implement captcha handling.
        this.lacuna.log.error('Captcha requested but we cannot handle it');
      } else {
        // TODO
        console.error(error.message);
      }
    }

    return null;
  }

  call(obj: ServerRequest) {
    // MenuStore.showLoader();

    const options = this.addSession(obj);
    const body = this.createBody(options);
    const data = JSON.stringify(body);
    const url = this.createUrl(options);

    const retry = async () => {
      await this.call(obj);
    };

    return this.sendRequest(url, data, options, retry);
  };
}

export default Server;
