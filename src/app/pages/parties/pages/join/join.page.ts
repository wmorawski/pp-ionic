import { JoinPartyMutationGQL } from './../../../../graphql/generated/types';
import { NavController } from '@ionic/angular';
import { PartyQueryGQL, Party } from 'src/app/graphql/generated/types';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';

import { PP_USER_ID } from 'src/app/constants';
import { map } from 'rxjs/operators';
import { PARTY_QUERY } from 'src/app/graphql/queries';

@Component({
    selector: 'app-join',
    templateUrl: './join.page.html',
    styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {
    id: any;
    party: any;
    partyData: Party;
    loading: any;
    isMember: boolean;
    constructor(
        protected readonly appService: AppService,
        private readonly router: ActivatedRoute,
        private readonly partyQueryGQL: PartyQueryGQL,
        private readonly joinPartyMutationGQL: JoinPartyMutationGQL,
        private readonly navCtrl: NavController,
    ) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.id = this.router.snapshot.params.id;
        this.party = this.partyQueryGQL.watch(getPartyVariables(this.id)).valueChanges.pipe(
            map((result) => {
                this.loading = result.loading;
                return result.data.party;
            }),
        );
        this.party.subscribe((party: Party) => {
            this.partyData = party;
            const userId = localStorage.getItem(PP_USER_ID);
            if (party.members.some((member) => member.id === userId) && party.author.id !== userId) {
                this.isMember = true;
            } else if (party.author.id === userId) {
                this.isMember = true;
            } else {
                this.isMember = false;
            }
        });
        this.appService.hideMainNav();
    }
    ionViewWillLeave() {
        this.appService.showMainNav();
    }
    join() {
        this.joinPartyMutationGQL
            .mutate(
                { partyId: this.id },
                { refetchQueries: [{ query: PARTY_QUERY, variables: getPartyVariables(this.id) }] },
            )
            .subscribe(() => {
                this.navCtrl.navigateRoot(['/parties', this.id]);
            });
    }
}
