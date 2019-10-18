import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular-boost';
import { Subscription, Observable } from 'rxjs';
import { PAGINATE_CHATS_QUERY } from 'src/app/graphql/queries';
import { HAS_CHATS_QUERY } from '../../graphql/queries';
import { HasChatsQueryGQL } from 'src/app/graphql/types';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.page.html',
    styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
    public hasChats: Observable<boolean>;
    constructor(private apollo: Apollo, private hasChatsGQL: HasChatsQueryGQL) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.hasChats = this.hasChatsGQL.watch().valueChanges.pipe(map(result => result.data.hasChats));
    }
}
