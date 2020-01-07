import { CombinePlaylistModalComponent } from './combine-playlist-modal/combine-playlist-modal.component';
import { PlaylistEdge } from 'src/app/graphql/generated/types';
import { ifElse } from 'ramda';
import { Playlist } from './../../../../../../../../graphql/generated/types';
import { ImportPlaylistModalComponent } from './import-playlist-modal/import-playlist-modal.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT } from 'src/app/graphql/fragments';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { isTrue } from 'src/app/shared/helpers/is-true';

export const PARTY_PLAYLISTS_CONNECTION_QUERY = gql`
    query Party_PlaylistsConnection(
        $where: PlaylistWhereInput
        $orderBy: PlaylistOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        playlistsConnection(
            where: $where
            orderBy: $orderBy
            skip: $skip
            after: $after
            before: $before
            first: $first
            last: $last
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                node {
                    ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
                    createdAt
                }
            }
        }
    }
    ${PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT}
`;

export const PLAYLIST_CONNECTION_PAGINATION_SIZE = 20;

@Component({
    selector: 'party-playlists',
    templateUrl: './playlists.component.html',
    styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
    @Input() id: string;
    playlists$: any;
    selectionMode = false;
    selectedPlaylists: Playlist[] = [];
    constructor(private readonly apollo: Apollo, private readonly modalCtrl: ModalController) {}

    ngOnInit() {
        this.playlists$ = this.apollo.watchQuery({
            query: PARTY_PLAYLISTS_CONNECTION_QUERY,
            variables: {
                where: {
                    parties_some: { id: this.id },
                },
                first: PLAYLIST_CONNECTION_PAGINATION_SIZE,
            },
            notifyOnNetworkStatusChange: true,
        }).valueChanges;
    }

    async openImportModal() {
        (
            await this.modalCtrl.create({
                component: ImportPlaylistModalComponent,
                componentProps: {
                    id: this.id,
                },
            })
        ).present();
    }

    toggleSelectionMode() {
        this.selectionMode = !this.selectionMode;
    }

    async combineSelected() {
        const modal = await this.modalCtrl.create({
            component: CombinePlaylistModalComponent,
            componentProps: {
                id: this.id,
                playlists: this.selectedPlaylists,
            },
        });
        modal.present();
        modal.onWillDismiss().then(() => {
            this.selectedPlaylists = [];
            this.selectionMode = false;
        });
    }

    handlePlaylistSelectionChange(e, playlist: PlaylistEdge) {
        ifElse(
            isTrue,
            () => this.selectPlaylist(playlist),
            () => this.deselectPlaylist(playlist),
        )(e);
    }

    selectPlaylist(edge: PlaylistEdge) {
        this.selectedPlaylists.push(edge.node);
    }
    deselectPlaylist(edge: PlaylistEdge) {
        this.selectedPlaylists = this.selectedPlaylists.filter((p) => p.id !== edge.node.id);
    }
}
