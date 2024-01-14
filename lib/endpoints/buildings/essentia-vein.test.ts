import { getLacuna } from '../../__utils__/get-lacuna';
import Lacuna from '../../lacuna';

let lacuna: Lacuna;

beforeAll(async () => {
  lacuna = await getLacuna();
});

test('drain', async () => {
  console.error = jest.fn();

  const { error } = await lacuna.essentiaVein.drain({ buildingId: 123456789, times: 123456789 });

  expect(console.error).toHaveBeenCalled();
  expect(error).toBeDefined();
});
