import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-graphql-error',
    templateUrl: './graphql-error.component.html',
    styleUrls: ['./graphql-error.component.scss'],
})
export class GraphqlErrorComponent implements OnInit {
    public _error = null;
    constructor() {}

    ngOnInit() {}

    @Input()
    set error(err: any) {
        if (err) {
            if (err.graphQLErrors.length) {
                this._error = err.graphQLErrors[0].message.message;
            } else {
                this._error = err.message;
            }
        }
    }
}
