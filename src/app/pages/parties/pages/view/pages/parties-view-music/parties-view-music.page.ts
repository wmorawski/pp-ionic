import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AuthorizationData } from '@ionic-native/spotify-auth/ngx';
import { environment } from 'src/environments/environment';
import { Track, init, getCurrentUserTopTracks, searchTracks } from 'spotify-web-sdk';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Subscription, from, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

declare var cordova: any;
@Component({
    selector: 'app-parties-view-music',
    templateUrl: './parties-view-music.page.html',
    styleUrls: ['./parties-view-music.page.scss'],
})
export class PartiesViewMusicPage implements OnInit {
    id: string;
    result: AuthorizationData;
    topTracks: Track[];
    searchedTracks: Track[];
    searchQueryChanged: Subject<string> = new Subject<string>();
    searchQueryWrapper: Subscription;
    currentTrack: Track = null;
    currentTrackSearched: Track = null;
    authorized = false;
    constructor(
        private readonly media: Media,
        private readonly chr: ChangeDetectorRef,
        private readonly router: Router,
    ) {}

    ngOnInit() {
        this.id = this.router.url.split('/')[2];
    }
    async ionViewWillEnter() {
        const spotifyData = JSON.parse(localStorage.getItem('SpotifyOAuthData') || '{}');
        if (spotifyData) {
            if (spotifyData.expiresAt > Date.now() / 1000) {
                init({ token: spotifyData.accessToken });
                this.authorized = true;
                this.afterAuthorization();
            }
        }
    }
    authWithSpotify() {
        return cordova.plugins.spotifyAuth.authorize(environment.spotify.config);
    }

    async handleAuthorization() {
        this.result = await this.authWithSpotify();
        init({ token: this.result.accessToken });
        this.authorized = true;
        this.afterAuthorization();
    }

    async afterAuthorization() {
        this.topTracks = (await getCurrentUserTopTracks({ limit: 50 })).items;
        this.searchQueryChanged.pipe(distinctUntilChanged(), debounceTime(800)).subscribe((event) => {
            if (this.searchQueryWrapper && !this.searchQueryWrapper.closed) {
                this.searchQueryWrapper.unsubscribe();
            }
            if (event.length >= 3) {
                this.searchQueryWrapper = from(searchTracks(event, { limit: 10 })).subscribe((res) => {
                    this.searchedTracks = res.items || [];
                });
            } else {
                this.searchedTracks = [];
            }
        });
    }

    async handleTrackChange(ev: Track) {
        this.currentTrack = ev;
    }
    async handleTrackChangeSearched(ev: Track) {
        this.currentTrackSearched = ev;
    }

    async handleOnTrackChange(track: Track) {
        this.currentTrack = track;
    }
    async handleOnTrackChangeSearched(track: Track) {
        this.currentTrackSearched = track;
    }

    ionViewWillLeave() {
        this.currentTrack = null;
        this.currentTrackSearched = null;
    }

    handleSearch(event) {
        this.searchQueryChanged.next(event);
    }
}
