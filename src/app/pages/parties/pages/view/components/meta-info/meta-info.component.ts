import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'party-meta-info',
    templateUrl: './meta-info.component.html',
    styleUrls: ['./meta-info.component.scss'],
})
export class MetaInfoComponent implements OnInit {
    @Input() icon: string;
    @Input() content: TemplateRef<any>;
    constructor() {}

    ngOnInit() {}
}
