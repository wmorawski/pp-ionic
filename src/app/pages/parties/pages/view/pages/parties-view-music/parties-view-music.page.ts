import { Component, OnInit } from '@angular/core';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';

@Component({
    selector: 'app-parties-view-music',
    templateUrl: './parties-view-music.page.html',
    styleUrls: ['./parties-view-music.page.scss'],
})
export class PartiesViewMusicPage implements OnInit {
    result = {};
    constructor(private readonly spotifyAuth: SpotifyAuth) {}

    ngOnInit() {}
    authWithSpotify() {
        const config = {
            clientId: 'cf6c218047e74336a40b6c1cfe70f35a',
            redirectUrl: 'partyplanner://callback',
            scopes: ['streaming', 'playlist-read-private', 'user-read-email', 'user-read-private'],
            tokenExchangeUrl: 'http://localhost:4000/auth/spotify/exchange',
            tokenRefreshUrl: 'http://localhost:4000/auth/spotify/refresh',
        };

        this.spotifyAuth.authorize(config).then(res => {
            console.log(res);
            this.result = { access_token: res.accessToken, expires_in: res.expiresAt, ref: res.encryptedRefreshToken };
        });
    }
}
