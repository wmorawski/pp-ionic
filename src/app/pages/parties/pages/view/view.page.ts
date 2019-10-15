import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { PartyQueryGQL, Party } from 'src/app/graphql/types';
import { Observable } from 'rxjs';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-view',
    templateUrl: './view.page.html',
    styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
    id;
    party: Observable<any>;
    constructor(private router: ActivatedRoute, private appService: AppService, private partyQueryGQL: PartyQueryGQL) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.id = this.router.snapshot.params.id;
        this.party = this.partyQueryGQL.watch(getPartyVariables(this.id)).valueChanges.pipe(map(result => result.data.party));
        this.appService.hideMainNav();
    }
    ionViewWillLeave() {
        this.appService.showMainNav();
    }
}
