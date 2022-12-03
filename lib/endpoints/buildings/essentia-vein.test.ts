import { getLacuna } from '../../__utils__/get-lacuna';
import Lacuna from '../../lacuna';

let lacuna: Lacuna;

beforeAll(async () => {
  lacuna = await getLacuna();
});

test('drain', async () => {
  console.error = jest.fn();
  console.warn = jest.fn();

  await lacuna.essentiaVein.drain([123456789, 123456789]);

  expect(console.error).toHaveBeenCalled();
  expect(console.warn).toHaveBeenCalledWith(
    'Essentiavein#drain called with positional args. This will go away very soon!'
  );
});
