import { PP_USER_ID } from './../../../../constants';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { PartyQueryGQL, Party } from 'src/app/graphql/generated/types';
import { Observable } from 'rxjs';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';
import { map } from 'rxjs/operators';
import { NavController, Platform } from '@ionic/angular';

@Component({
    selector: 'app-view',
    templateUrl: './view.page.html',
    styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
    id;
    party: Observable<any>;
    constructor(
        private router: ActivatedRoute,
        private appService: AppService,
        private partyQueryGQL: PartyQueryGQL,
        private navCtrl: NavController,
        private platform: Platform,
    ) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.id = this.router.snapshot.params.id;
        this.party = this.partyQueryGQL
            .watch(getPartyVariables(this.id))
            .valueChanges.pipe(map((result) => result.data.party));
        this.party.subscribe((party: Party) => {
            if (
                !party ||
                (!party.members.some((member) => member.id === localStorage.getItem(PP_USER_ID)) && !party.isPublic)
            ) {
                this.navCtrl.navigateRoot('/parties');
            }
        });
        this.appService.hideMainNav();
        // this.platform.backButton.subscribe((e) => {
        //     this.navCtrl.navigateRoot('parties');
        // });
    }
    ionViewWillLeave() {
        this.appService.showMainNav();
    }
}
