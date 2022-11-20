import Lacuna from '../lacuna';
import { LacunaConfig } from '../types';
import { ensureTrailingSlash } from './util';

class Config {
  lacuna: Lacuna;

  serverUrl = '';
  apiKey = 'anonymous';
  fingerprintToken = 'TODO';

  constructor(lacuna: Lacuna, config: LacunaConfig) {
    this.lacuna = lacuna;

    this.serverUrl = ensureTrailingSlash(config.serverUrl);
    if (config.apiKey) this.apiKey = config.apiKey;
    if (config.fingerprintToken) this.fingerprintToken = config.fingerprintToken;
  }
}

export default Config;
