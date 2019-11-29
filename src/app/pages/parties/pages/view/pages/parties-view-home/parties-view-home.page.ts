import { PP_USER_ID } from 'src/app/constants';
import { MembersModalComponent } from './../../components/modals/members-modal/members-modal.component';
import { InvitesModalComponent } from './../../components/modals/invites-modal/invites-modal.component';
import { QrModalComponent } from './../../components/modals/qr-modal/qr-modal.component';
import { MapboxService } from 'src/app/services/mapbox.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { PartyQueryGQL, Party } from 'src/app/graphql/generated/types';
import { map, first } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

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
    party;
    partySubscription: Subscription;
    constructor(
        private appService: AppService,
        private router: Router,
        private partyQueryGQL: PartyQueryGQL,
        private mabpox: MapboxService,
        private geo: Geolocation,
        private modalController: ModalController
    ) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.id = this.router.url.split('/')[2]; // temporary workaround;
        this.party$ = this.partyQueryGQL.watch(getPartyVariables(this.id)).valueChanges.pipe(map(result => result.data.party));
        this.partySubscription = this.party$.subscribe(async (party: Party) => {
            this.party = party;
            const userPosition = await this.geo.getCurrentPosition();
            this.location$ = this.mabpox.getDrivingTraffic({
                from: {
                    fLongitude: userPosition.coords.longitude,
                    fLatitude: userPosition.coords.latitude,
                },
                to: {
                    tLongitude: party.location.longitude,
                    tLatitude: party.location.latitude,
                },
            });
        });
    }

    ionViewWillLeave() {
        this.partySubscription.unsubscribe();
    }

    showQrModal() {
        return this.party$.pipe(first()).subscribe(async party => {
            return await (
                await this.modalController.create({
                    component: QrModalComponent,
                    componentProps: {
                        party,
                    },
                })
            ).present();
        });
    }

    showInvitesModal() {
        this.party$.pipe(first()).subscribe(async party => {
            return await (
                await this.modalController.create({
                    component: InvitesModalComponent,
                    componentProps: {
                        party,
                    },
                })
            ).present();
        });
    }

    showMembersModal() {
        return this.party$.pipe(first()).subscribe(async (party: Party) => {
            return await (
                await this.modalController.create({
                    component: MembersModalComponent,
                    componentProps: {
                        members: party.members,
                    },
                })
            ).present();
        });
    }

    get goingColor() {
        return this.party.members.some(member => member.id === localStorage.getItem(PP_USER_ID)) ? 'primary' : 'medium';
    }
}
