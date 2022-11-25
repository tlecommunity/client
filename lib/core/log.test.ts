import { Lacuna } from '../';

let lacuna: Lacuna;

beforeAll(() => {
  lacuna = new Lacuna({ serverUrl: 'localhost' });
});

test('debug', () => {
  console.debug = jest.fn();
  lacuna.log.setLogLevel('debug');

  lacuna.log.debug('Hello this is a test');

  expect(console.debug).toHaveBeenLastCalledWith('Hello this is a test');
});

test('info', () => {
  console.info = jest.fn();
  lacuna.log.setLogLevel('info');

  lacuna.log.info('Hello this is a test');

  expect(console.info).toHaveBeenLastCalledWith('Hello this is a test');
});

test('warn', () => {
  console.warn = jest.fn();
  lacuna.log.setLogLevel('warn');

  lacuna.log.warn('Hello this is a test');

  expect(console.warn).toHaveBeenLastCalledWith('Hello this is a test');
});

test('error', () => {
  console.error = jest.fn();
  lacuna.log.setLogLevel('error');

  lacuna.log.error('Hello this is a test');

  expect(console.error).toHaveBeenLastCalledWith('Hello this is a test');
});

test('should restrict messages based off log level', () => {
  console.debug = jest.fn();
  console.warn = jest.fn();
  lacuna.log.setLogLevel('warn');

  lacuna.log.debug('Silly debug message that we should not see in the logs');
  lacuna.log.warn('Important warning that should come up in the logs');

  expect(console.debug).not.toHaveBeenCalled();
  expect(console.warn).toHaveBeenLastCalledWith(
    'Important warning that should come up in the logs'
  );
});
