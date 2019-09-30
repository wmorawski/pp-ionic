import { PP_USER_ID } from 'src/app/constants';
import { PartiesQueryGQL, PartyOrderByInput } from './../../graphql/types';
import { NavbarManager } from './../../shared/helpers/navbar-manager';
import { Component, OnInit } from '@angular/core';
import { HasPartiesQueryGQL } from 'src/app/graphql/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Apollo } from 'apollo-angular-boost';
import { PARTIES_QUERY } from 'src/app/graphql/queries';

@Component({
    selector: 'app-parties',
    templateUrl: './parties.page.html',
    styleUrls: ['./parties.page.scss'],
})
export class PartiesPage extends NavbarManager implements OnInit {
    hasParties: Observable<boolean>;
    parties: Observable<any>;
    showMap = false;

    constructor(
        protected appService: AppService,
        private hasPartiesGQL: HasPartiesQueryGQL,
        private partiesQueryGQL: PartiesQueryGQL,
        private navCtrl: NavController,
        private apollo: Apollo
    ) {
        super(appService);
    }

    ngOnInit() {}

    ionViewWillEnter() {
        this.hasParties = this.hasPartiesGQL.watch().valueChanges.pipe(map(result => result.data.hasParties));
        if (this.hasParties) {
            this.parties = this.partiesQueryGQL
                .watch({
                    where: {
                        members_some: { id: localStorage.getItem(PP_USER_ID) },
                    },
                    orderBy: PartyOrderByInput.CreatedAtDesc,
                })
                .valueChanges.pipe(map(result => result.data.parties));
        }
    }

    create() {
        this.navCtrl.navigateForward(['parties', 'create']);
    }

    toggleMap() {
        this.showMap = !this.showMap;
        if (this.showMap) {
            this.appService.hideNavbar();
        } else {
            this.appService.showNavbar();
        }
    }
}
