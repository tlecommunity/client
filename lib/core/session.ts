import Lacuna from '../lacuna';

class Session {
  lacuna: Lacuna;
  sessionId = '';

  constructor(lacuna: Lacuna) {
    this.lacuna = lacuna;
  }

  set(sessionId: string) {
    this.sessionId = sessionId;
  }

  get() {
    return this.sessionId;
  }
}

export default Session;
