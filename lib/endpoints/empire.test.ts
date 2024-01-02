import { Lacuna } from '../';
import { getLacuna } from '../__utils__/get-lacuna';

test('login with errors', async () => {
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080/' });
  console.error = jest.fn();

  await lacuna.empire.login({
    name: 'non-existant-empire',
    password: 'incorrect-password',
    browser: 'todo',
    api_key: 'anonymous',
  });

  expect(console.error).toHaveBeenCalledWith(1002, 'Empire does not exist.', 'non-existant-empire');
});

test('login', async () => {
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080/' });
  const res = await lacuna.empire.login({
    name: 'natalie',
    password: '1234qwer',
    browser: 'todo',
    api_key: 'anonymous',
  });
  expect(res.session_id).toBeDefined();
});

test('logout', async () => {
  const lacuna = await getLacuna();
  const res = await lacuna.empire.logout();
  expect(res).toBe(1);
});

test('viewBoosts', async () => {
  const lacuna = await getLacuna();

  const { boosts } = await lacuna.empire.viewBoosts();

  expect(boosts.food).toBeDefined();
  expect(boosts.ore).toBeDefined();
  expect(boosts.water).toBeDefined();
  expect(boosts.energy).toBeDefined();
  expect(boosts.storage).toBeDefined();
  expect(boosts.spy_training).toBeDefined();
  expect(boosts.building).toBeDefined();
  expect(boosts.happiness).toBeDefined();
});

test('getStatus', async () => {
  const lacuna = await getLacuna();

  const res = await lacuna.empire.getStatus();

  expect(res.empire).toBeDefined();
  expect(res.server).toBeDefined();
  expect(res.empire.name).toBe('natalie');
});

test('setBoost', async () => {
  const lacuna = await getLacuna();
  console.error = jest.fn();

  await lacuna.empire.setBoost({ type: 'invalidtype', weeks: -0 });

  expect(console.error).toHaveBeenCalled();
});

test('fetchCaptcha', async () => {
  const lacuna = await getLacuna();

  const res = await lacuna.empire.fetchCaptcha();

  expect(res.guid).toBeDefined();
  expect(res.url).toBeDefined();
});
