import Lacuna from '../lacuna';
import _ from 'lodash';
import { getLacuna } from '../__utils__/get-lacuna';

let lacuna: Lacuna;
let pccId: number;

beforeAll(async () => {
  lacuna = await getLacuna();
  const {
    result: { empire },
  } = await lacuna.empire.getStatus();
  const {
    result: { buildings },
  } = await lacuna.body.getBuildings({ body_id: empire?.home_planet_id });
  pccId = _.chain(buildings)
    .keys()
    .filter((key) => buildings[key].name === 'Planetary Command Center')
    .first()
    .toInteger()
    .value();
});

test('view', async () => {
  const { result } = await lacuna.planetaryCommand.view({ building_id: pccId });
  expect(result?.building).toBeDefined();
  expect(result?.building.name).toBe('Planetary Command Center');
});
