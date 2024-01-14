import Lacuna from '../../lacuna';
import _ from 'lodash';
import { getLacuna } from '../../__utils__/get-lacuna';
import { int } from '../../core/util';

let lacuna: Lacuna;
let buildingId: string;

beforeAll(async () => {
  lacuna = await getLacuna();
  const {
    result: { empire },
  } = await lacuna.empire.getStatus();
  const {
    result: { buildings },
  } = await lacuna.body.getBuildings({ body_id: empire.home_planet_id });
  buildingId = _.chain(buildings)
    .keys()
    .filter((key) => buildings[key].name === 'Shipyard')
    .first()
    .value();
});

test.skip('view', async () => {
  const { result } = await lacuna.shipyard.view({ building_id: int(buildingId) });

  expect(result?.building).toBeDefined();
  expect(result?.building.name).toBe('Shipyard');
});

test.skip('viewBuildQueue', async () => {
  const { result } = await lacuna.shipyard.viewBuildQueue({ building_id: int(buildingId) });

  expect(result?.cost_to_subsidize).toBeDefined();
  expect(result?.fleets_building).toBeDefined();
  expect(result?.number_of_fleets_building).toBeDefined();
  expect(result?.number_of_ships_building).toBeDefined();
});

test.skip('getBuildable', async () => {
  const { result } = await lacuna.shipyard.getBuildable({ building_id: int(buildingId) });

  expect(result?.buildable).toBeDefined();
  expect(result?.build_queue_max).toBeDefined();
  expect(result?.build_queue_used).toBeDefined();
  expect(result?.docks_available).toBeDefined();
});
