import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { PartyQueryGQL } from 'src/app/graphql/types';
import { map } from 'rxjs/operators';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';

@Component({
    selector: 'app-parties-view-home',
    templateUrl: './parties-view-home.page.html',
    styleUrls: ['./parties-view-home.page.scss'],
})
export class PartiesViewHomePage implements OnInit {
    id;
    party$;
    itemPluralMapping = {
        member: {
            '=0': '0 members',
            '=1': '1 member',
            other: '# members',
        },
    };
    constructor(private appService: AppService, private router: Router, private partyQueryGQL: PartyQueryGQL) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.id = this.router.url.split('/')[2]; // temporary workaround;
        this.party$ = this.partyQueryGQL.watch(getPartyVariables(this.id)).valueChanges.pipe(map(result => result.data.party));
    }
}
