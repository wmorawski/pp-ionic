// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    backendUrl: 'http://localhost:4000',
    mapbox: {
        accessToken: 'pk.eyJ1IjoicmF0dGVuIiwiYSI6ImNqcnE4eWk0czAwdWI0M3BmOGl2bzd1N3cifQ.N8Eyx2hvwkOGnZhSvttvZw',
    },
    spotify: {
        config: {
            clientId: 'cf6c218047e74336a40b6c1cfe70f35a',
            redirectUrl: 'partyplanner://callback',
            scopes: [
                'user-read-email',
                'user-read-private',
                'user-top-read',
                'playlist-modify-public',
                'playlist-modify-private',
                'streaming',
            ],
            tokenExchangeUrl: 'auth/spotify/exchange',
            tokenRefreshUrl: 'auth/spotify/refresh',
        },
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
