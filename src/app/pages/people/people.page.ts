import { QueryRef } from 'apollo-angular';
import { PP_USER_ID } from 'src/app/constants';
import { Component, OnInit, EventEmitter } from '@angular/core';
import gql from 'graphql-tag';
import { User_PeopleConnectionGQL } from 'src/app/graphql/generated/types';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

const PAGE_SIZE = 20;

export const USER_PEOPLE_CONNECTION_QUERY = gql`
    query User_PeopleConnection(
        $where: UserWhereInput
        $orderBy: UserOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        usersConnection(
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
                    id
                    firstName
                    lastName
                    avatar
                    createdAt
                }
            }
        }
    }
`;

@Component({
    selector: 'app-people',
    templateUrl: './people.page.html',
    styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
    people$: any;
    loading = true;
    watcher: QueryRef<any>;
    searchQuery: string;
    filterQueryChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(private readonly upcqGQL: User_PeopleConnectionGQL) {}

    ngOnInit() {
        this.watcher = this.upcqGQL.watch(
            {
                where: {
                    id_not: localStorage.getItem(PP_USER_ID),
                    isPrivate: false,
                    OR: [{ firstName_contains: this.searchQuery }, { lastName_contains: this.searchQuery }],
                },
                first: PAGE_SIZE,
            },
            {
                fetchPolicy: 'cache-and-network',
            },
        );
        this.people$ = this.watcher.valueChanges.pipe(
            map((r) => {
                this.loading = r.loading;
                return r.data ? r.data.usersConnection.edges : [];
            }),
        );
        this.filterQueryChanged.pipe(distinctUntilChanged(), debounceTime(600)).subscribe(() => {
            this.watcher.refetch({
                where: {
                    id_not: localStorage.getItem(PP_USER_ID),
                    isPrivate: false,
                    OR: [{ firstName_contains: this.searchQuery }, { lastName_contains: this.searchQuery }],
                },
                first: PAGE_SIZE,
            });
        });
    }
    handleFilter(event) {
        this.filterQueryChanged.next(event);
    }
}
