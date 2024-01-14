import Lacuna from '../../lacuna';
import Building from '../building';
import * as SP from '../../types/space-port';

class SpacePort extends Building {
  constructor(lacuna: Lacuna, url: string) {
    super(lacuna, url);
  }

  viewAllFleets(params: SP.ViewAllFleetsParams) {
    return this.callWithSession<SP.ViewAllFleetsResponse>('view_all_fleets', params);
  }

  viewTravellingFleets(params: SP.ViewTravellingFleetsParams) {
    return this.callWithSession<SP.ViewTravellingFleetsResponse>('view_travelling_fleets', params);
  }

  viewAvailableFleets(params: SP.ViewAvailableFleetsParams) {
    return this.callWithSession<SP.ViewAvailableFleetsResponse>('view_available_fleets', params);
  }

  viewUnavailableFleets(params: SP.ViewUnavailableFleetsParams) {
    return this.callWithSession<SP.ViewUnavailableFleetsResponse>(
      'view_unavailable_fleets',
      params
    );
  }

  viewOrbitingFleets(params: SP.ViewOrbitingFleetsParams) {
    return this.callWithSession<SP.ViewOrbitingFleetsResponse>('view_orbiting_fleets', params);
  }

  viewIncomingFleets(params: SP.ViewIncomingFleetsParams) {
    return this.callWithSession<SP.ViewIncomingFleetsResponse>('view_incoming_fleets', params);
  }

  sendFleet(params: SP.SendFleetParams) {
    return this.callWithSession<SP.SendFleetResponse>('send_fleet', params);
  }
}

export default SpacePort;
