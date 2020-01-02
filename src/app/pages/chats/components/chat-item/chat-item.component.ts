import { ChatMessagesSubscriptionGQL, Chat, PaginateMessagesQueryGQL } from './../../../../graphql/generated/types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'chats-chat-item',
    templateUrl: './chat-item.component.html',
    styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
    @Input() chat: Chat;
    @Input() index: any;
    duration: string;
    chatMessages: any;
    constructor(private readonly paginateMessagesGQL: PaginateMessagesQueryGQL) {}

    ngOnInit() {
        this.duration = `duration-200ms delay-${Number(this.index) % 10}00ms`;
        this.chatMessages = this.paginateMessagesGQL
            .watch({ where: { id: this.chat.id } })
            .valueChanges.subscribe(console.log);
    }
}
