import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'chats-chat-item',
    templateUrl: './chat-item.component.html',
    styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
    @Input() chat: any;
    @Input() index: any;
    duration: string;
    constructor() {}

    ngOnInit() {
        this.duration = `duration-200ms delay-${Number(this.index) % 10}00ms`;
    }
}
