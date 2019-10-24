export const environment = {
    production: true,
    backendUrl: 'https://api.partyplanner.fun',
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
