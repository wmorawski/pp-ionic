import { ModalController } from '@ionic/angular';
import { QueryRef } from 'apollo-angular';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PP_USER_ID } from './../../../../../../../../../constants';
import {
    Party_PlaylistsConnectionGQL,
    Party_ImportPlaylistsToPartyGQL,
    Party,
    PlaylistEdge,
    Playlist,
} from './../../../../../../../../../graphql/generated/types';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import gql from 'graphql-tag';
import { pluck } from 'ramda';
import { PARTY_PLAYLISTS_CONNECTION_QUERY, PLAYLIST_CONNECTION_PAGINATION_SIZE } from '../playlists.component';

export const IMPORT_PLAYLISTS_TO_PARTY_MUTATION = gql`
    mutation Party_ImportPlaylistsToParty($playlists: String!, $partyId: ID!) {
        importPlaylistsToParty(playlists: $playlists, partyId: $partyId)
    }
`;
@Component({
    selector: 'app-import-playlist-modal',
    templateUrl: './import-playlist-modal.component.html',
    styleUrls: ['./import-playlist-modal.component.scss'],
})
export class ImportPlaylistModalComponent implements OnInit {
    @Input() id: string;
    loading = true;
    watcher: QueryRef<any>;
    playlists$: any = [];
    filterQuery: string;
    selectedPlaylists: Playlist[] = [];
    filterQueryChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(
        private readonly ppcgql: Party_PlaylistsConnectionGQL,
        private readonly modalCtrl: ModalController,
        private readonly iptpmGQL: Party_ImportPlaylistsToPartyGQL
    ) {}

    ngOnInit() {
        this.watcher = this.ppcgql.watch(
            {
                where: {
                    parties_none: { id: this.id },
                    user: { id: localStorage.getItem(PP_USER_ID) },
                    name_contains: this.filterQuery,
                    importable: true,
                },
            },
            { fetchPolicy: 'cache-and-network' }
        );
        this.playlists$ = this.watcher.valueChanges.pipe(
            map(r => {
                this.loading = r.loading;
                this.selectedPlaylists = [];
                return r.data ? r.data.playlistsConnection.edges : [];
            })
        );

        this.filterQueryChanged.pipe(distinctUntilChanged(), debounceTime(600)).subscribe(_ => {
            this.watcher.refetch({
                where: {
                    parties_none: { id: this.id },
                    user: { id: localStorage.getItem(PP_USER_ID) },
                    name_contains: this.filterQuery,
                    importable: true,
                },
            });
        });
    }

    selectPlaylist(edge: PlaylistEdge) {
        this.selectedPlaylists.push(edge.node);
    }
    deselectPlaylist(edge: PlaylistEdge) {
        this.selectedPlaylists = this.selectedPlaylists.filter(p => p.id !== edge.node.id);
    }

    handleChangeSelection(ev: boolean, edge: PlaylistEdge) {
        if (ev) {
            this.selectPlaylist(edge);
        } else {
            this.deselectPlaylist(edge);
        }
    }
    handleFilter(event) {
        this.filterQueryChanged.next(event);
    }

    handleDismiss() {
        this.modalCtrl.dismiss();
    }

    importPlaylists() {
        this.iptpmGQL
            .mutate(
                {
                    partyId: this.id,
                    playlists: pluck('id', this.selectedPlaylists).join(','),
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
                }
            )
            .subscribe(res => {
                this.modalCtrl.dismiss();
            });
    }
}
