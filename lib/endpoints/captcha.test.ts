import { getLacuna } from '../__utils__/get-lacuna';
import Lacuna from '../lacuna';

let lacuna: Lacuna;
let universityId: string;

beforeAll(async () => {
  lacuna = await getLacuna();
});

test('fetch', async () => {
  const res = await lacuna.captcha.fetch();
  expect(res.guid).toBeDefined();
  expect(res.url).toBeDefined();
});

test('solve', async () => {
  console.error = jest.fn();

  await lacuna.captcha.solve({ guid: 'test', solution: 'test' });

  expect(console.error).toHaveBeenCalled();
});
