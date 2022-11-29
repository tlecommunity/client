import { Lacuna } from '../';
import { EmpireBlock } from '../types/status';
import { getLacuna } from '../__utils__/get-lacuna';

let lacuna: Lacuna;
let empire: EmpireBlock;

beforeAll(async () => {
  lacuna = await getLacuna();
  const res = await lacuna.empire.getStatus();
  empire = res.status.empire;
});

test('getBuildings', async () => {
  const res = await lacuna.body.getBuildings({ body_id: empire.home_planet_id });
  expect(res.buildings).toBeDefined();
});

test('rearrangeBuildings', async () => {
  console.warn = jest.fn();

  const res = await lacuna.body.rearrangeBuildings({
    body_id: empire.home_planet_id,
    arrangement: [],
  });

  expect(res.body).toBeDefined();
  expect(res.moved).toStrictEqual([]);
});

test('getStatus', async () => {
  const res = await lacuna.body.getStatus({ body_id: empire.home_planet_id });
  expect(res.body).toBeDefined();
  expect(res.empire).toBeDefined();
  expect(res.server).toBeDefined();
});

test('getBodyStatus', async () => {
  const res = await lacuna.body.getBodyStatus({ body_id: empire.home_planet_id });
  expect(res.body).toBeDefined();
});
