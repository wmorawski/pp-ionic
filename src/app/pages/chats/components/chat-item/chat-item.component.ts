import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'chats-chat-item',
    templateUrl: './chat-item.component.html',
    styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
    @Input() chat: any;
    constructor() {}

    ngOnInit() {}
}
