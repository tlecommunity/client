import { getLacuna } from '../__utils__/get-lacuna';

test('credits', async () => {
  const lacuna = await getLacuna();

  const { result } = await lacuna.stats.credits();

  expect(result).toBeDefined();
  expect(result['0']['Game Design']).toStrictEqual(['JT Smith', 'Jamie Vrbsky']);
});
