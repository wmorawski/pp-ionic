import { User } from './../../../../../../../graphql/generated/types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-members-modal',
    templateUrl: './members-modal.component.html',
    styleUrls: ['./members-modal.component.scss'],
})
export class MembersModalComponent implements OnInit {
    @Input() members: User[];
    constructor() {}

    ngOnInit() {}
}
