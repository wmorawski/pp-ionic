import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from 'src/app/services/map.service';
import { GeoJson, FeatureCollection } from '../../classes/map';
import { PartiesQueryGQL, PartyOrderByInput } from 'src/app/graphql/generated/types';
import { PP_USER_ID } from 'src/app/constants';
import { map } from 'rxjs/operators';

@Component({
    selector: 'map-box',
    templateUrl: './map-box.component.html',
    styleUrls: ['./map-box.component.scss'],
})
export class MapBoxComponent implements OnInit {
    /// default settings
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 52.406374;
    lng = 16.9251681;
    message = 'Hello World!';

    // data
    source: any;
    markers: any;

    constructor(private mapService: MapService, private partiesQueryGQL: PartiesQueryGQL) {}

    ngOnInit() {
        this.markers = this.partiesQueryGQL
            .watch({
                where: {
                    members_some: { id: localStorage.getItem(PP_USER_ID) },
                },
                orderBy: PartyOrderByInput.CreatedAtDesc,
            })
            .valueChanges.pipe(
                map((result) =>
                    result.data.parties.map((party) => {
                        return new GeoJson([party.location.longitude, party.location.latitude], {
                            message: party.title,
                            color: party.colorTint,
                        });
                    }),
                ),
            );
        this.initializeMap();
    }

    private initializeMap() {
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.map.flyTo({
                    center: [this.lng, this.lat],
                });
            });
        }

        this.buildMap();
    }

    buildMap() {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 13,
            center: [this.lng, this.lat],
            trackResize: true,
        });
        /// Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());

        /// Add realtime firebase data on map load
        this.map.on('load', (event) => {
            this.map.resize();
            this.markers.subscribe((markers) => {
                markers.map((marker) => {
                    return new mapboxgl.Marker().setLngLat(marker.geometry.coordinates).addTo(this.map);
                });
            });
        });
    }

    /// Helpers

    removeMarker(marker) {
        this.mapService.removeMarker(marker.$key);
    }

    flyTo(data: GeoJson) {
        this.map.flyTo({
            center: data.geometry.coordinates as mapboxgl.LngLatLike,
        });
    }
}
