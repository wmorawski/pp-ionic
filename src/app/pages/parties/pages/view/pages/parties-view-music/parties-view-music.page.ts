import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    result: AuthorizationData;
    topTracks: Track[];
    searchedTracks: Track[];
    searchQueryChanged: Subject<string> = new Subject<string>();
    searchQueryWrapper: Subscription;
    currentTrack: Track = null;
    currentTrackSearched: Track = null;
    constructor(private readonly media: Media, private readonly chr: ChangeDetectorRef) {}

    ngOnInit() {}
    async ionViewWillEnter() {
        this.result = await this.authWithSpotify();
        init({ token: this.result.accessToken });
        this.topTracks = (await getCurrentUserTopTracks({ limit: 50 })).items;
        this.searchQueryChanged
            .pipe(
                distinctUntilChanged(),
                debounceTime(800)
            )
            .subscribe((event) => {
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
    authWithSpotify() {
        return cordova.plugins.spotifyAuth.authorize(environment.spotify.config);
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
