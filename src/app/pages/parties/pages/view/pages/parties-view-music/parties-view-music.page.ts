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
    lastId: string;
    currentId: string;
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
        if (this.currentTrackMedia) {
            this.currentTrackMedia.stop();
        }
        if (ev) {
            this.lastId = this.currentTrack ? this.currentTrack.id : null;
            this.currentTrack = ev;
            this.lastId = this.lastId || ev.id;
            this.currentId = ev.id;
            this.currentTrackMedia = this.media.create(ev.previewUrl);
            this.currentTrackMedia.play();
            this.currentTrackMedia.onSuccess.subscribe(async () => {
                if (this.currentId === ev.id) {
                    this.currentTrack = null;
                }
                this.chr.detectChanges();
            });
            this.currentTrackMedia.onError.subscribe((error) => {
                this.chr.detectChanges();
            });
        } else {
            this.currentTrack = null;
        }
    }

    ionViewWillLeave() {
        if (this.currentTrackMedia) {
            this.currentTrackMedia.stop();
        }
    }
}
