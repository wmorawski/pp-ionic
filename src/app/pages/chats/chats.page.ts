import {
    ChatConnection,
    PaginateChatsQueryQuery,
    PaginateChatsQueryChatsConnection,
} from './../../graphql/generated/types';
import { PP_USER_ID } from 'src/app/constants';
import { PaginateChatsQueryGQL } from 'src/app/graphql/generated/types';
import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Subscription, Observable } from 'rxjs';
import { PAGINATE_CHATS_QUERY } from 'src/app/graphql/queries';
import { HAS_CHATS_QUERY } from '../../graphql/queries';
import { HasChatsQueryGQL } from 'src/app/graphql/generated/types';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.page.html',
    styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
    public hasChats: Observable<boolean>;
    public chats: Observable<ChatConnection>;
    private query: QueryRef<any, any>;
    public loading = true;
    private variables = {
        where: {
            members_some: { id: localStorage.getItem(PP_USER_ID) },
        },
        first: 20,
    };
    constructor(
        private apollo: Apollo,
        private hasChatsGQL: HasChatsQueryGQL,
        private paginateChatsQueryGQL: PaginateChatsQueryGQL,
    ) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.hasChats = this.hasChatsGQL.watch().valueChanges.pipe(map((result) => result.data.hasChats));
        if (this.hasChats) {
            this.query = this.paginateChatsQueryGQL.watch(
                this.variables,

                { fetchPolicy: 'cache-and-network' },
            );
            this.chats = this.query.valueChanges.pipe(
                map((result) => {
                    this.loading = result.loading;
                    return result.data ? result.data.chatsConnection : null;
                }),
            );
        }
    }

    doRefresh($event) {
        this.query.refetch(this.variables).then((res) => {
            this.chats = res.data;
            $event.target.complete();
        });
    }
}
