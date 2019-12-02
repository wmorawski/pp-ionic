import { ToastController, ModalController } from '@ionic/angular';
import { PP_USER_ID } from './../../../../../../../../constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
    PartySavedTrack,
    Party_CreatePlaylistGQL,
    Full_Saved_Track_FragmentFragment,
    Playlist,
} from 'src/app/graphql/generated/types';
import { Component, OnInit, Input } from '@angular/core';
import gql from 'graphql-tag';
import { PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT } from 'src/app/graphql/fragments';
import { getCurrentUserProfile, createPlaylist, addTracksToPlaylist, getPlaylist } from 'spotify-web-sdk';
import {
    PARTY_PLAYLISTS_CONNECTION_QUERY,
    PLAYLIST_CONNECTION_PAGINATION_SIZE,
} from '../playlists/playlists.component';

export async function createSpotifyPlaylist(tracksUris: string[], playlistName: string, isPublic: boolean) {
    const { id } = await getCurrentUserProfile();
    const { id: playlistId } = await createPlaylist(id, playlistName, {
        public: isPublic,
    });

    await addTracksToPlaylist(playlistId, tracksUris);

    return await getPlaylist(playlistId);
}

export const CREATE_PLAYLIST_MUTATION = gql`
    mutation Party_CreatePlaylist($data: PlaylistCreateInput!) {
        createPlaylist(data: $data) {
            ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
        }
    }
    ${PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT}
`;

@Component({
    templateUrl: './create-playlist-modal.component.html',
    styleUrls: ['./create-playlist-modal.component.scss'],
})
export class CreatePlaylistModalComponent implements OnInit {
    @Input() tracks: PartySavedTrack[];
    @Input() id: string;
    tracksCopy: PartySavedTrack[];
    constructor(
        private readonly createPlaylistGQL: Party_CreatePlaylistGQL,
        private readonly toastCtrl: ToastController,
        private readonly modalCtrl: ModalController,
    ) {}
    createPlaylistForm = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        isPrivate: new FormControl(false),
        restricted: new FormControl(false),
    });

    ngOnInit() {
        this.tracksCopy = [...this.tracks];
    }

    onDelete(ev, item) {
        this.tracksCopy.splice(
            this.tracksCopy.findIndex((t) => t.id === item.id),
            1,
        );
    }

    async onSubmit() {
        const { name, isPrivate, restricted } = this.createPlaylistForm.value;
        const spotifyPlaylistData = await createSpotifyPlaylist(
            this.tracksCopy.map((track) => track.uri),
            name,
            !isPrivate,
        );

        if (spotifyPlaylistData) {
            this.createPlaylistGQL
                .mutate(
                    {
                        data: {
                            tracks: { connect: this.tracksCopy.map((track) => ({ id: track.id })) },
                            parties: { connect: [{ id: this.id }] },
                            name,
                            user: { connect: { id: localStorage.getItem(PP_USER_ID) } },
                            imageUrl: spotifyPlaylistData.images[0].url,
                            uri: spotifyPlaylistData.uri,
                            importable: !restricted,
                            spotifyId: spotifyPlaylistData.id,
                            spotifyExternalUrl: spotifyPlaylistData.externalUrls.spotify,
                        },
                    },
                    {
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
                .subscribe(
                    async (res) => {
                        (
                            await this.toastCtrl.create({
                                message: 'Playlist created successfully',
                                duration: 3000,
                            })
                        ).present();
                        await this.modalCtrl.dismiss();
                    },
                    async (error) => {
                        (
                            await this.toastCtrl.create({
                                message: 'Something went wrong',
                                duration: 3000,
                            })
                        ).present();
                    },
                );
        }
    }
}
