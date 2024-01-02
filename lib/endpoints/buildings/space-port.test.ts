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
  const { empire } = await lacuna.empire.getStatus();
  homePlanetId = empire.home_planet_id;
  const { buildings } = await lacuna.body.getBuildings({ body_id: homePlanetId });

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
  const res = await lacuna.spacePort.view({ building_id: int(buildingId) });

  expect(res.building).toBeDefined();
  expect(res.building.name).toBe('Space Port');
});

test.skip('viewAllFleets', async () => {
  const res = await lacuna.spacePort.viewAllFleets({ building_id: int(buildingId) });

  expect(res.fleets).toBeDefined();
  expect(res.number_of_fleets).toBeDefined();
});

test.skip('viewAvailableFleets', async () => {
  const res = await lacuna.spacePort.viewAvailableFleets({
    target: { body_id: testPlanetId },
    body_id: homePlanetId,
  });

  expect(res).toBeDefined();
});

test.skip('viewUnavailableFleets', async () => {
  const res = await lacuna.spacePort.viewUnavailableFleets({
    target: { body_id: testPlanetId },
    body_id: homePlanetId,
  });

  expect(res).toBeDefined();
});

test.skip('viewOrbitingFleets', async () => {
  const res = await lacuna.spacePort.viewOrbitingFleets({ target: { body_id: testPlanetId } });

  expect(res).toBeDefined();
});

test.skip('viewIncomingFleets', async () => {
  const res = await lacuna.spacePort.viewIncomingFleets({ target: { body_id: testPlanetId } });

  expect(res).toBeDefined();
});
