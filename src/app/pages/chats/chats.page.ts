import { PP_USER_ID } from 'src/app/constants';
import { PaginateChatsQueryGQL } from 'src/app/graphql/generated/types';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription, Observable } from 'rxjs';
import { PAGINATE_CHATS_QUERY } from 'src/app/graphql/queries';
import { HAS_CHATS_QUERY } from '../../graphql/queries';
import { HasChatsQueryGQL } from 'src/app/graphql/generated/types';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.page.html',
    styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
    public hasChats: Observable<boolean>;
    public chats: any;
    constructor(private apollo: Apollo, private hasChatsGQL: HasChatsQueryGQL, private paginateChatsQueryGQL: PaginateChatsQueryGQL) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.hasChats = this.hasChatsGQL.watch().valueChanges.pipe(map(result => result.data.hasChats));
        if (this.hasChats) {
            this.chats = this.paginateChatsQueryGQL
                .watch(
                    {
                        where: {
                            members_some: { id: localStorage.getItem(PP_USER_ID) },
                        },
                        first: 20,
                    },
                    { fetchPolicy: 'cache-and-network' }
                )
                .valueChanges.pipe(map(result => result.data.chatsConnection));
        }
    }
}
