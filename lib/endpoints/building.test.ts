import Lacuna from '../lacuna';
import _ from 'lodash';
import { getLacuna } from '../__utils__/get-lacuna';
import { int } from '../core/util';

let lacuna: Lacuna;
let universityId: string;

beforeAll(async () => {
  lacuna = await getLacuna();
  const { status } = await lacuna.empire.getStatus();
  const { buildings } = await lacuna.body.getBuildings({ body_id: status.empire.home_planet_id });
  universityId = _.chain(buildings)
    .keys()
    .filter((key) => buildings[key].name === 'University')
    .first()
    .value();
});

test('view', async () => {
  const res = await lacuna.university.view({ building_id: int(universityId) });
  expect(res.building).toBeDefined();
  expect(res.building.name).toBe('University');
});
