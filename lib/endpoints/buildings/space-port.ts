import Lacuna from '../../lacuna';
import Building from '../building';
import * as SP from '../../types/space-port';

class SpacePort extends Building {
  constructor(lacuna: Lacuna, url: string) {
    super(lacuna, url);
  }

  viewAllFleets(params: SP.ViewAllFleetsParams): Promise<SP.ViewAllFleetsResponse> {
    return this.callWithSession('view_all_fleets', params);
  }

  viewTravellingFleets(
    params: SP.ViewTravellingFleetsParams
  ): Promise<SP.ViewTravellingFleetsResponse> {
    return this.callWithSession('view_travelling_fleets', params);
  }

  viewAvailableFleets(
    params: SP.ViewAvailableFleetsParams
  ): Promise<SP.ViewAvailableFleetsResponse> {
    return this.callWithSession('view_available_fleets', params);
  }

  viewUnavailableFleets(
    params: SP.ViewUnavailableFleetsParams
  ): Promise<SP.ViewUnavailableFleetsResponse> {
    return this.callWithSession('view_unavailable_fleets', params);
  }

  viewOrbitingFleets(params: SP.ViewOrbitingFleetsParams): Promise<SP.ViewOrbitingFleetsResponse> {
    return this.callWithSession('view_orbiting_fleets', params);
  }

  viewIncomingFleets(params: SP.ViewIncomingFleetsParams): Promise<SP.ViewIncomingFleetsResponse> {
    return this.callWithSession('view_incoming_fleets', params);
  }

  sendFleet(params: SP.SendFleetParams): Promise<SP.SendFleetResponse> {
    return this.callWithSession('send_fleet', params);
  }
}

export default SpacePort;
