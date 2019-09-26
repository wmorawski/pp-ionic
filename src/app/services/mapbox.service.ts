import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MapboxService implements OnInit {
    // tslint:disable-next-line: new-parens
    private headers: HttpHeaders = new HttpHeaders();
    private baseURL = 'https://api.mapbox.com';
    private tokenParam =
        'access_token=pk.eyJ1IjoicmF0dGVuIiwiYSI6ImNqcnE4eWk0czAwdWI0M3BmOGl2bzd1N3cifQ.N8Eyx2hvwkOGnZhSvttvZw&';

    constructor(private readonly http: HttpClient) {
        this.headers = this.headers.append(
            'access_token',
            'pk.eyJ1IjoicmF0dGVuIiwiYSI6ImNqcnE4eWk0czAwdWI0M3BmOGl2bzd1N3cifQ.N8Eyx2hvwkOGnZhSvttvZw',
        );
    }

    ngOnInit() {}

    public searchLocation(query = '') {
        return this.http.get(
            `${this.baseURL}/geocoding/v5/mapbox.places/${query}.json?${this.tokenParam}types=address&country=PL&limit=10`,
        );
    }
}
