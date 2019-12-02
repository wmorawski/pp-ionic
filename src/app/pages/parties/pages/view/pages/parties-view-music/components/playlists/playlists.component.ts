import { Component, OnInit, Input } from '@angular/core';
import { PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT } from 'src/app/graphql/fragments';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
    constructor(private readonly apollo: Apollo) {}

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
}
