import Lacuna from '../../lacuna';
import _ from 'lodash';
import { getLacuna } from '../../__utils__/get-lacuna';
import { int } from '../../core/util';

let lacuna: Lacuna;
let buildingId: string;

beforeAll(async () => {
  lacuna = await getLacuna();
  const { empire } = await lacuna.empire.getStatus();
  const { buildings } = await lacuna.body.getBuildings({ body_id: empire.home_planet_id });
  buildingId = _.chain(buildings)
    .keys()
    .filter((key) => buildings[key].name === 'Shipyard')
    .first()
    .value();
});

test.skip('view', async () => {
  const res = await lacuna.shipyard.view({ building_id: int(buildingId) });

  expect(res.building).toBeDefined();
  expect(res.building.name).toBe('Shipyard');
});

test.skip('viewBuildQueue', async () => {
  const res = await lacuna.shipyard.viewBuildQueue({ building_id: int(buildingId) });

  expect(res.cost_to_subsidize).toBeDefined();
  expect(res.fleets_building).toBeDefined();
  expect(res.number_of_fleets_building).toBeDefined();
  expect(res.number_of_ships_building).toBeDefined();
});

test.skip('getBuildable', async () => {
  const res = await lacuna.shipyard.getBuildable({ building_id: int(buildingId) });

  expect(res.buildable).toBeDefined();
  expect(res.build_queue_max).toBeDefined();
  expect(res.build_queue_used).toBeDefined();
  expect(res.docks_available).toBeDefined();
});
