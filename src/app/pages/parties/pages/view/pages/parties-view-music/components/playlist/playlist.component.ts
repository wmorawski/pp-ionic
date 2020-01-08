import { Party_DeletePlaylistGQL } from './../../../../../../../../graphql/generated/types';
import { PlaylistEdge } from 'src/app/graphql/generated/types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getPlaylist, startUserPlayback } from 'spotify-web-sdk';
import gql from 'graphql-tag';
import {
    PARTY_PLAYLISTS_CONNECTION_QUERY,
    PLAYLIST_CONNECTION_PAGINATION_SIZE,
} from '../playlists/playlists.component';

export const PARTY_EDIT_PLAYLIST_MUTATION = gql`
    mutation Party_EditPlaylist($data: PlaylistUpdateInput!, $where: PlaylistWhereUniqueInput!) {
        updatePlaylist(data: $data, where: $where) {
            id
        }
    }
`;

export const PARTY_DELETE_PLAYLIST_MUTATION = gql`
    mutation Party_DeletePlaylist($where: PlaylistWhereUniqueInput!) {
        deletePlaylist(where: $where) {
            id
        }
    }
`;

const EditPlaylistCacheFragment = gql`
    fragment EditPlaylistCacheFragment on Playlist {
        name
        importable
    }
`;

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    selected = false;
    @Input() playlist: PlaylistEdge;
    @Input() id: string;
    @Input() selectionMode: boolean;
    @Output() playlistSelectionChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private readonly pdpmGQL: Party_DeletePlaylistGQL) {}

    ngOnInit() {}

    showInfo() {}

    onSelectionChange(e) {
        this.playlistSelectionChange.emit(this.selected);
    }

    delete() {
        this.pdpmGQL
            .mutate(
                { where: { id: this.playlist.node.id } },
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
            .subscribe();
    }
}
