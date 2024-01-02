import Lacuna from './lacuna';

const modules = [
  'body',
  'captcha',
  'config',
  'empire',
  'essentiaVein',
  'log',
  'server',
  'session',
  'shipyard',
  'spacePort',
];

test('authenticate', async () => {
  console.info = jest.fn();
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080' });

  await lacuna.authenticate('natalie', '1234qwer');

  expect(lacuna.session.get()).not.toEqual('');
});

test('buildingFromUrl', () => {
  const lacuna = new Lacuna({ serverUrl: 'localhost' });

  const pcc = lacuna.buildingFromUrl('planetarycommand');

  expect(pcc).toBeDefined();
  expect(pcc.url).toBe('planetarycommand');
});

test('version', () => {
  const lacuna = new Lacuna({ serverUrl: 'localhost' });

  expect(lacuna.version).toBeDefined();
});

test('modules', () => {
  const lacuna = new Lacuna({ serverUrl: '' });

  modules.forEach((module) => expect(lacuna[module]).toBeDefined());
});
