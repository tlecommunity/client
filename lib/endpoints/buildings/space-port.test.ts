import Lacuna from '../../lacuna';
import _ from 'lodash';
import { getLacuna } from '../../__utils__/get-lacuna';
import { int } from '../../core/util';

let lacuna: Lacuna;
let buildingId: string;
let homePlanetId: number;
let testPlanetId: number;

beforeAll(async () => {
  lacuna = await getLacuna();
  const {
    result: { empire },
  } = await lacuna.empire.getStatus();
  homePlanetId = empire.home_planet_id;
  const {
    result: { buildings },
  } = await lacuna.body.getBuildings({ body_id: homePlanetId });

  buildingId = _.chain(buildings)
    .keys()
    .filter((key) => buildings[key].name === 'Space Port')
    .first()
    .value();

  const testPlanet = _.chain(empire.bodies.colonies)
    .filter((colony) => colony.id != homePlanetId)
    .first()
    .value();

  if (testPlanet) testPlanetId = testPlanet.id;
});

test.skip('view', async () => {
  const { result } = await lacuna.spacePort.view({ building_id: int(buildingId) });

  expect(result?.building).toBeDefined();
  expect(result?.building.name).toBe('Space Port');
});

test.skip('viewAllFleets', async () => {
  const { result } = await lacuna.spacePort.viewAllFleets({ building_id: int(buildingId) });

  expect(result?.fleets).toBeDefined();
  expect(result?.number_of_fleets).toBeDefined();
});

test.skip('viewAvailableFleets', async () => {
  const { result } = await lacuna.spacePort.viewAvailableFleets({
    target: { body_id: testPlanetId },
    body_id: homePlanetId,
  });

  expect(result).toBeDefined();
});

test.skip('viewUnavailableFleets', async () => {
  const { result } = await lacuna.spacePort.viewUnavailableFleets({
    target: { body_id: testPlanetId },
    body_id: homePlanetId,
  });

  expect(result).toBeDefined();
});

test.skip('viewOrbitingFleets', async () => {
  const { result } = await lacuna.spacePort.viewOrbitingFleets({
    target: { body_id: testPlanetId },
  });

  expect(result).toBeDefined();
});

test.skip('viewIncomingFleets', async () => {
  const { result } = await lacuna.spacePort.viewIncomingFleets({
    target: { body_id: testPlanetId },
  });

  expect(result).toBeDefined();
});
