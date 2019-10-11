import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MapboxService implements OnInit {
    // tslint:disable-next-line: new-parens
    private headers: HttpHeaders = new HttpHeaders();
    private baseURL = 'https://api.mapbox.com';
    private tokenParam = `access_token=${environment.mapbox.accessToken}`;

    constructor(private readonly http: HttpClient) {
        this.headers = this.headers.append('access_token', environment.mapbox.accessToken);
    }

    ngOnInit() {}

    public searchLocation(query = '') {
        return this.http.get(
            `${this.baseURL}/geocoding/v5/mapbox.places/${query}.json?${this.tokenParam}&types=address&country=PL&limit=10`
        );
    }

    public searchByPosition(longitude, latitude) {
        return this.http.get(`${this.baseURL}/geocoding/v5/mapbox.places/${longitude},${latitude}.json?${this.tokenParam}&types=address`);
    }
}
