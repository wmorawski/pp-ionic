import { UserEdge } from './../../../../graphql/generated/types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'people-user',
    templateUrl: './people-user.component.html',
    styleUrls: ['./people-user.component.scss'],
})
export class PeopleUserComponent implements OnInit {
    @Input() user: UserEdge;
    friends: boolean;
    pending: boolean;

    constructor() {}

    ngOnInit() {}
}
