import Lacuna from '../lacuna';

const LogLevels = {
  error: 100,
  warn: 200,
  info: 300,
  debug: 400,
}

type Loggable = string | object | Array<any> | undefined | null;

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Log {
  lacuna: Lacuna;
  logLevel: LogLevel = 'warn';

  constructor(lacuna: Lacuna) {
    this.lacuna = lacuna;
  }

  setLogLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  out(level: LogLevel, message: Loggable[]) {
    if (LogLevels[this.logLevel] >= LogLevels[level]) {
      console[level](...message);
    }
  }

  debug(...message: Loggable[]) {
    this.out('debug', message);
  }

  info(...message: Loggable[]) {
    this.out('info', message);
  }

  warn(...message: Loggable[]) {
    this.out('warn', message);
  }

  error(...message: Loggable[]) {
    this.out('error', message);
  }
}

export default Log;
