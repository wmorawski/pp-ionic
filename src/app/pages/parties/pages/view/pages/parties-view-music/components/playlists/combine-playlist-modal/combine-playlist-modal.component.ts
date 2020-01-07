import { PP_USER_ID } from 'src/app/constants';
import { compose, map, flatten } from 'ramda';
import {
    Party_CombinePlaylistsGQL,
    Playlist,
    Party_Playlists_Connection_Node_FragmentFragment,
} from 'src/app/graphql/generated/types';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import gql from 'graphql-tag';
import { createPlaylist, Playlist as PlaylistSDK } from 'spotify-web-sdk';
import { createSpotifyPlaylist } from 'src/app/shared/helpers/spotify';
import { PARTY_PLAYLISTS_CONNECTION_QUERY, PLAYLIST_CONNECTION_PAGINATION_SIZE } from '../playlists.component';
export const COMBINE_PLAYLISTS_MUTATION = gql`
    mutation Party_CombinePlaylists(
        $partyPlannerData: CombinePlaylistPartyPlannerData!
        $spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput!
    ) {
        combinePlaylists(partyPlannerData: $partyPlannerData, spotifyData: $spotifyData) {
            id
        }
    }
`;
type Track = NonNullable<Party_Playlists_Connection_Node_FragmentFragment['tracks']>[0];

@Component({
    selector: 'app-combine-playlist-modal',
    templateUrl: './combine-playlist-modal.component.html',
    styleUrls: ['./combine-playlist-modal.component.scss'],
})
export class CombinePlaylistModalComponent implements OnInit {
    constructor(private readonly modalCtrl: ModalController, private readonly cpmGQL: Party_CombinePlaylistsGQL) {}
    @Input() playlists: Playlist[];
    @Input() id: string;
    playlistName: string;
    deleteAffected = false;
    notImportable = false;

    private getTracksUrisFromPlaylists(playlists: Playlist[]): string[] {
        return compose(
            map((track: Track) => track.uri),
            flatten,
            map((playlist: Playlist) => playlist.tracks),
        )(playlists);
    }
    private createNewPlaylistInSpotify(): Promise<PlaylistSDK> {
        return createSpotifyPlaylist(
            [...new Set(this.getTracksUrisFromPlaylists(this.playlists))],
            this.playlistName,
            true,
        );
    }
    ngOnInit() {}

    async combinePlaylists() {
        try {
            const spotifyPlaylist: PlaylistSDK = await this.createNewPlaylistInSpotify();
            this.cpmGQL
                .mutate(
                    {
                        partyPlannerData: {
                            playlists: this.playlists.map((p) => p.id).join(','),
                            userId: localStorage.getItem(PP_USER_ID),
                            partyId: this.id,
                            deleteAffected: this.deleteAffected,
                            importable: !this.notImportable,
                        },
                        spotifyData: {
                            imageUrl: spotifyPlaylist.images[0].url,
                            uri: spotifyPlaylist.uri,
                            spotifyId: spotifyPlaylist.id,
                            spotifyExternalUrl: spotifyPlaylist.externalUrls.spotify as string,
                            name: spotifyPlaylist.name,
                        },
                    },
                    {
                        awaitRefetchQueries: true,
                        refetchQueries: [
                            {
                                query: PARTY_PLAYLISTS_CONNECTION_QUERY,
                                variables: {
                                    where: {
                                        parties_some: { id: this.id },
                                    },
                                    first: PLAYLIST_CONNECTION_PAGINATION_SIZE,
                                },
                            },
                        ],
                    },
                )
                .subscribe((r) => {
                    this.modalCtrl.dismiss();
                });
        } catch (e) {
            console.log(e);
        }
    }
}
