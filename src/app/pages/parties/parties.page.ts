import { PP_USER_ID } from 'src/app/constants';
import { PartiesQueryGQL, PartyOrderByInput } from 'src/app/graphql/generated/types';
import { NavbarManager } from './../../shared/helpers/navbar-manager';
import { Component, OnInit } from '@angular/core';
import { HasPartiesQueryGQL } from 'src/app/graphql/generated/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Apollo } from 'apollo-angular';
import { PARTIES_QUERY } from 'src/app/graphql/queries';
import { Map } from 'mapbox-gl';
import { getPartiesDateVariables } from 'src/app/shared/helpers/graphql-utils';

@Component({
    selector: 'app-parties',
    templateUrl: './parties.page.html',
    styleUrls: ['./parties.page.scss'],
})
export class PartiesPage extends NavbarManager implements OnInit {
    hasParties: Observable<boolean>;
    parties: any;
    hasPartiesLoading = false;
    showMap = false;
    map: Map;

    constructor(
        protected appService: AppService,
        private hasPartiesGQL: HasPartiesQueryGQL,
        private partiesQueryGQL: PartiesQueryGQL,
        private navCtrl: NavController,
        private apollo: Apollo,
    ) {
        super(appService);
    }

    ngOnInit() {}

    ionViewWillEnter() {
        this.hasParties = this.hasPartiesGQL
            .watch(
                {},
                {
                    fetchPolicy: 'cache-and-network',
                },
            )
            .valueChanges.pipe(
                map((result) => {
                    this.hasPartiesLoading = result.loading;
                    if (result.data) {
                        return result.data.hasParties;
                    } else {
                        return false;
                    }
                }),
            );
        if (this.hasParties) {
            this.parties = this.partiesQueryGQL
                .watch(getPartiesDateVariables(new Date(), localStorage.getItem(PP_USER_ID)), {
                    fetchPolicy: 'cache-and-network',
                })
                .valueChanges.pipe(
                    map((result) => {
                        if (result.data) {
                            return result.data.parties;
                        } else {
                            return [];
                        }
                    }),
                );
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

    initMap(e) {
        this.map = e;
        this.map.resize();
    }
}
