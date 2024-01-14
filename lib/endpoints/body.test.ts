import { Lacuna } from '../';
import { EmpireBlock } from '../types/status';
import { getLacuna } from '../__utils__/get-lacuna';

let lacuna: Lacuna;
let empire: EmpireBlock;

beforeAll(async () => {
  lacuna = await getLacuna();
  const { result } = await lacuna.empire.getStatus();
  empire = result?.empire;
});

test('getBuildings', async () => {
  const { result } = await lacuna.body.getBuildings({ body_id: empire.home_planet_id });
  expect(result?.buildings).toBeDefined();
});

test('rearrangeBuildings', async () => {
  console.warn = jest.fn();

  const { result } = await lacuna.body.rearrangeBuildings({
    body_id: empire.home_planet_id,
    arrangement: [],
  });

  expect(result?.body).toBeDefined();
  expect(result?.moved).toStrictEqual([]);
});

test('getStatus', async () => {
  const { result } = await lacuna.body.getStatus({ body_id: empire.home_planet_id });
  expect(result?.body).toBeDefined();
  expect(result?.empire).toBeDefined();
  expect(result?.server).toBeDefined();
});
