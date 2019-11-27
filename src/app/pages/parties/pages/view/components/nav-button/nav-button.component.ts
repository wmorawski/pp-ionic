import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'party-nav-button',
    templateUrl: './nav-button.component.html',
    styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
    @Input() icon: string;
    @Input() title: string;
    @Input() color = 'medium';
    constructor() {}

    ngOnInit() {}
}
