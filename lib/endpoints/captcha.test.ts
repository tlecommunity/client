import { getLacuna } from '../__utils__/get-lacuna';
import Lacuna from '../lacuna';

let lacuna: Lacuna;

beforeAll(async () => {
  lacuna = await getLacuna();
});

test('fetch', async () => {
  const { result } = await lacuna.captcha.fetch();
  expect(result?.guid).toBeDefined();
  expect(result?.url).toBeDefined();
});

test('solve', async () => {
  console.error = jest.fn();

  const { error } = await lacuna.captcha.solve({ guid: 'test', solution: 'test' });

  expect(console.error).toHaveBeenCalled();
  expect(error).toBeDefined();
});
