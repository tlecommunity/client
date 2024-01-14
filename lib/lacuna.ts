import {
  Body,
  Building,
  Captcha,
  Empire,
  EssentiaVein,
  Shipyard,
  SpacePort,
  Stats,
} from './endpoints';
import Log from './core/log';
import Config from './core/config';
import Server from './core/server';
import Session from './core/session';
import { LacunaConfig } from './types';
import { version } from '../package.json';

class Lacuna {
  version = version;

  body: Body;
  captcha: Captcha;
  config: Config;
  empire: Empire;
  essentiaVein: EssentiaVein;
  log: Log;
  planetaryCommand: Building;
  server: Server;
  session: Session;
  shipyard: Shipyard;
  spacePort: SpacePort;
  stats: Stats;
  university: Building;

  constructor(config: LacunaConfig) {
    this.log = new Log(this);
    this.config = new Config(this, config);
    this.server = new Server(this);
    this.session = new Session(this);

    //
    // Endpoints
    //
    this.body = new Body(this, 'body');
    this.captcha = new Captcha(this, 'captcha');
    this.empire = new Empire(this, 'empire');
    this.essentiaVein = new EssentiaVein(this, 'essentiavein');
    this.planetaryCommand = new Building(this, 'planetarycommand');
    this.shipyard = new Shipyard(this, 'shipyard');
    this.spacePort = new SpacePort(this, 'spaceport');
    this.stats = new Stats(this, 'stats');
    this.university = new Building(this, 'university');
  }

  async authenticate(name: string, password: string) {
    const { result, error } = await this.empire.login({
      name,
      password,
      api_key: this.config.apiKey,
      browser: this.config.fingerprintToken,
    });

    if (result) {
      this.session.set(result.session_id);
      this.log.info(`Logged in as ${name}`);
    } else if (error) {
      this.log.error('Could not log in', error);
    }
  }

  buildingFromUrl(url: string) {
    return new Building(this, url);
  }
}

export default Lacuna;
