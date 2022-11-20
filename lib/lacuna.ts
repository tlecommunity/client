import * as endpoints from './endpoints';
import Log from './core/log';
import Config from './core/config';
import Server from './core/server';
import Session from './core/session';
import { LacunaConfig } from './types';

class Lacuna {
  body: endpoints.Body;
  buildings: endpoints.Buildings;
  config: Config;
  empire: endpoints.Empire;
  log: Log;
  server: Server;
  session: Session;

  constructor(config: LacunaConfig) {
    this.log = new Log(this);
    this.config = new Config(this, config);
    this.server = new Server(this);
    this.session = new Session(this);

    //
    // Endpoints
    //
    this.body = new endpoints.Body(this);
    this.buildings = new endpoints.Buildings(this);
    this.empire = new endpoints.Empire(this);
  }

  async authenticate(name: string, password: string) {
    const res = await this.empire.login({
      name,
      password,
      api_key: this.config.apiKey,
      browser: this.config.fingerprintToken,
    });

    this.session.set(res.session_id);
    this.log.info(`Logged in as ${name}`);
  }
}

export default Lacuna;
