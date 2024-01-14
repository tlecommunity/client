import { Lacuna } from '../';
import { getLacuna } from '../__utils__/get-lacuna';

test('login with errors', async () => {
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080/' });
  console.error = jest.fn();

  const { error } = await lacuna.empire.login({
    name: 'non-existant-empire',
    password: 'incorrect-password',
    browser: 'todo',
    api_key: 'anonymous',
  });

  expect(console.error).toHaveBeenCalledWith(1002, 'Empire does not exist.', 'non-existant-empire');
  expect(error).toBeDefined();
});

test('login', async () => {
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080/' });
  const { result } = await lacuna.empire.login({
    name: 'natalie',
    password: '1234qwer',
    browser: 'todo',
    api_key: 'anonymous',
  });
  expect(result?.session_id).toBeDefined();
});

test('logout', async () => {
  const lacuna = await getLacuna();
  const response = await lacuna.empire.logout();
  expect(response?.result).toBe(1);
});

test('viewBoosts', async () => {
  const lacuna = await getLacuna();

  const { result } = await lacuna.empire.viewBoosts();

  expect(result?.boosts.food).toBeDefined();
  expect(result?.boosts.ore).toBeDefined();
  expect(result?.boosts.water).toBeDefined();
  expect(result?.boosts.energy).toBeDefined();
  expect(result?.boosts.storage).toBeDefined();
  expect(result?.boosts.spy_training).toBeDefined();
  expect(result?.boosts.building).toBeDefined();
  expect(result?.boosts.happiness).toBeDefined();
});

test('getStatus', async () => {
  const lacuna = await getLacuna();

  const { result } = await lacuna.empire.getStatus();

  expect(result?.empire).toBeDefined();
  expect(result?.server).toBeDefined();
  expect(result?.empire.name).toBe('natalie');
});

test('setBoost', async () => {
  const lacuna = await getLacuna();
  console.error = jest.fn();

  const { error } = await lacuna.empire.setBoost({ type: 'invalidtype', weeks: -0 });

  expect(console.error).toHaveBeenCalled();
  expect(error).toBeDefined();
});

test('fetchCaptcha', async () => {
  const lacuna = await getLacuna();

  const { result } = await lacuna.empire.fetchCaptcha();

  expect(result?.guid).toBeDefined();
  expect(result?.url).toBeDefined();
});
