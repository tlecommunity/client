import Lacuna from '../../lacuna';
import _ from 'lodash';
import { getLacuna } from '../../__utils__/get-lacuna';
import { int } from '../../core/util';

let lacuna: Lacuna;
let buildingId: string;

beforeAll(async () => {
  lacuna = await getLacuna();
  const { status } = await lacuna.empire.getStatus();
  const { buildings } = await lacuna.body.getBuildings({ body_id: status.empire.home_planet_id });
  buildingId = _.chain(buildings)
    .keys()
    .filter((key) => buildings[key].name === 'Space Port')
    .first()
    .value();
});

test('view', async () => {
  const res = await lacuna.spacePort.view({ building_id: int(buildingId) });

  expect(res.building).toBeDefined();
  expect(res.building.name).toBe('Space Port');
});

test('viewAllFleets', async () => {
  const res = await lacuna.spacePort.viewAllFleets({ building_id: int(buildingId) });

  expect(res.fleets).toBeDefined();
  expect(res.number_of_fleets).toBeDefined();
});
