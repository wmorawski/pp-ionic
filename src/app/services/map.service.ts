import { Injectable } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { GeoJson } from '../shared/classes/map';
import { Apollo } from 'apollo-angular-boost';
import { PARTIES_QUERY } from '../graphql/queries';
import { PP_USER_ID } from '../constants';

@Injectable({
    providedIn: 'root',
})
export class MapService {
    constructor(private readonly apollo: Apollo) {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }

    getMarkers() {
        return this.apollo.getClient().readQuery({
            query: PARTIES_QUERY,
            variables: {
                where: { members_some: { id: localStorage.getItem(PP_USER_ID) } },
                orderBy: 'createdAt_DESC',
            },
        });
    }

    createMarker(data: GeoJson) {
        return;
    }

    removeMarker($key: string) {
        return;
    }
}
