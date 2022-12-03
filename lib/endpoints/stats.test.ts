import { getLacuna } from '../__utils__/get-lacuna';

test('credits', async () => {
  const lacuna = await getLacuna();

  const res = await lacuna.stats.credits();

  expect(res).toBeDefined();
  expect(res['0']['Game Design']).toStrictEqual(['JT Smith', 'Jamie Vrbsky']);
});
