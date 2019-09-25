import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
    @Input() user: any = null;
    @Input() width = '128px';
    style = '';

    constructor() {}

    ngOnInit() {
        this.style = `width: ${this.width}; height: auto`;
    }
}
