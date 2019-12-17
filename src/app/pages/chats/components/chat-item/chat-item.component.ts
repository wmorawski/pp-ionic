import { ChatMessagesSubscriptionGQL, Chat } from './../../../../graphql/generated/types';
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
    constructor(private readonly chatMessagesSubscriptionGQL: ChatMessagesSubscriptionGQL) {}

    ngOnInit() {
        this.duration = `duration-200ms delay-${Number(this.index) % 10}00ms`;
        this.chatMessages = this.chatMessagesSubscriptionGQL
            .subscribe({ where: { node: { id: this.chat.id } } })
            .subscribe(console.log);
    }
}
