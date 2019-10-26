import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthorizationData } from '@ionic-native/spotify-auth/ngx';
import { environment } from 'src/environments/environment';
import { Track, init, getCurrentUserTopTracks } from 'spotify-web-sdk';
import { Media, MediaObject } from '@ionic-native/media/ngx';

declare var cordova: any;
@Component({
    selector: 'app-parties-view-music',
    templateUrl: './parties-view-music.page.html',
    styleUrls: ['./parties-view-music.page.scss'],
})
export class PartiesViewMusicPage implements OnInit {
    result: AuthorizationData;
    topTracks: Track[];
    currentTrack: Track = null;
    constructor(private readonly media: Media, private readonly chr: ChangeDetectorRef) {}

    ngOnInit() {}
    async ionViewWillEnter() {
        this.result = await this.authWithSpotify();
        init({ token: this.result.accessToken });
        this.topTracks = (await getCurrentUserTopTracks({ limit: 50 })).items;
    }
    authWithSpotify() {
        return cordova.plugins.spotifyAuth.authorize(environment.spotify.config);
    }

    async handleTrackChange(ev: Track) {
        this.currentTrack = ev;
    }

    async handleOnTrackChange(track: Track) {
        console.log(track);
    }

    ionViewWillLeave() {}
}
