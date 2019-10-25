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
    currentTrackMedia: MediaObject;
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

    handleTrackChange(ev: Track) {
        if (this.currentTrackMedia) {
            this.currentTrackMedia.stop();
        }
        this.currentTrack = ev;
        if (ev) {
            this.currentTrackMedia = this.media.create(ev.previewUrl);
            this.currentTrackMedia.play();
            this.currentTrackMedia.onSuccess.subscribe(() => {
                this.currentTrack = null;
                this.currentTrackMedia = null;
            });
            this.currentTrackMedia.onError.subscribe(error => {
                this.currentTrack = null;
                this.currentTrackMedia = null;
            });
        } else {
            this.currentTrackMedia = null;
        }
    }

    ionViewWillLeave() {
        if (this.currentTrackMedia) {
            this.currentTrackMedia.stop();
        }
    }
}
