import { MapboxService } from './../../../../../../services/mapbox.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { PartyQueryGQL, Party } from 'src/app/graphql/types';
import { map } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';

@Component({
    selector: 'app-parties-view-home',
    templateUrl: './parties-view-home.page.html',
    styleUrls: ['./parties-view-home.page.scss'],
})
export class PartiesViewHomePage implements OnInit {
    id;
    party$;
    location$;
    itemPluralMapping = {
        member: {
            '=0': ' members',
            '=1': ' member',
            other: ' members',
        },
    };
    constructor(
        private appService: AppService,
        private router: Router,
        private partyQueryGQL: PartyQueryGQL,
        private mabpox: MapboxService,
        private geo: Geolocation,
    ) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.id = this.router.url.split('/')[2]; // temporary workaround;
        this.party$ = this.partyQueryGQL
            .watch(getPartyVariables(this.id))
            .valueChanges.pipe(map((result) => result.data.party));
        this.party$.subscribe(async (party: Party) => {
            const userPosition = await this.geo.getCurrentPosition();
            this.location$ = this.mabpox.getDrivingTraffic({
                from: { fLongitude: userPosition.coords.longitude, fLatitude: userPosition.coords.latitude },
                to: { tLongitude: party.location.longitude, tLatitude: party.location.latitude },
            });
        });
    }
}
