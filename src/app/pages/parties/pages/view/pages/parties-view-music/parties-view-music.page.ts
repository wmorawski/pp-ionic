import { PARTY_SAVED_TRACKS_QUERY } from './../../../../../../graphql/queries';
import {
    Party_SavedTracksGQL,
    Party_SavedTracksVariables,
    Full_Saved_Track_FragmentFragment,
    AddTrackToPartyGQL,
} from 'src/app/graphql/generated/types';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AuthorizationData } from '@ionic-native/spotify-auth/ngx';
import { environment } from 'src/environments/environment';
import { Track, init, getCurrentUserTopTracks, searchTracks, startUserPlayback } from 'spotify-web-sdk';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Subscription, from, Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
declare var cordova: any;
export const partySavedTracksVariables = (partyId: string): Partial<Party_SavedTracksVariables> => ({
    where: {
        party: {
            id: partyId,
        },
    },
});

export function mapTrackToMutationVariables(track: Full_Saved_Track_FragmentFragment, partyId: string) {
    return {
        data: {
            spotifyId: track.id,
            name: track.name,
            length: track.length,
            uri: track.uri,
            popularity: track.popularity,
            durationMs: track.durationMs,
            previewUrl: track.previewUrl,
            stringArtists: track.stringArtists,
            album: {
                create: {
                    spotifyId: track.album.id,
                    uri: track.album.uri,
                    name: track.album.name,
                    imageUrl: track.album.imageUrl,
                    releaseDate: track.album.releaseDate,
                },
            },
            explicit: track.explicit,
            party: { connect: { id: partyId } },
        },
    };
}
@Component({
    selector: 'app-parties-view-music',
    templateUrl: './parties-view-music.page.html',
    styleUrls: ['./parties-view-music.page.scss'],
})
export class PartiesViewMusicPage implements OnInit {
    id: string;
    pageNumber = 0;
    result: AuthorizationData;
    topTracks: Track[];
    searchedTracks: Track[];
    searchQueryChanged: Subject<string> = new Subject<string>();
    searchQueryWrapper: Subscription;
    currentTrack: Track = null;
    currentTrackSearched: Track = null;
    authorized = false;
    savedTracks$: Observable<any> = null;
    constructor(
        private readonly media: Media,
        private readonly chr: ChangeDetectorRef,
        private readonly router: Router,
        private readonly partySavedTracksGQL: Party_SavedTracksGQL,
        private readonly addTrackToPartyGQL: AddTrackToPartyGQL,
        private readonly toastCtrl: ToastController,
    ) {}

    ngOnInit() {
        this.id = this.router.url.split('/')[2];
    }
    async ionViewWillEnter() {
        this.savedTracks$ = this.partySavedTracksGQL
            .watch(partySavedTracksVariables(this.id), { fetchPolicy: 'cache-and-network' })
            .valueChanges.pipe(
                map((res) => {
                    return res.data ? res.data.partySavedTracks : [];
                }),
            );

        const spotifyData = JSON.parse(localStorage.getItem('SpotifyOAuthData') || '{}');
        if (spotifyData) {
            if (spotifyData.expiresAt > Date.now()) {
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
        // this.pageNumber = 0;
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

    async handleAddToSaved(track: Track) {
        const variables = mapTrackToMutationVariables(track, this.id);
        this.addTrackToPartyGQL
            .mutate(variables, {
                refetchQueries: [
                    {
                        query: PARTY_SAVED_TRACKS_QUERY,
                        variables: partySavedTracksVariables(this.id),
                    },
                ],
            })
            .subscribe(
                async (res) => {
                    (
                        await this.toastCtrl.create({
                            animated: true,
                            message: 'Track successfully added',
                            duration: 3000,
                        })
                    ).present();
                },
                async (error) => {
                    (
                        await this.toastCtrl.create({
                            animated: true,
                            message: 'Something went wrong',
                            duration: 3000,
                        })
                    ).present();
                },
            );
    }

    async handleSpotifyPlay(arg: any) {
        try {
            await startUserPlayback(arg);
        } catch (e) {
            (
                await this.toastCtrl.create({
                    animated: true,
                    message: e.response.data.error.message,
                    duration: 3000,
                })
            ).present();
        }
    }
}
