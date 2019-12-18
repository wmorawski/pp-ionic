import { map } from 'rxjs/operators';
import { Party, PartyInvitationsQueryGQL } from 'src/app/graphql/generated/types';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-invites-modal',
    templateUrl: './invites-modal.component.html',
    styleUrls: ['./invites-modal.component.scss'],
})
export class InvitesModalComponent implements OnInit {
    @Input() party: Party;
    invitations$: any;

    constructor(
        private readonly partyInvitationsQueryGQL: PartyInvitationsQueryGQL,
        private readonly platform: Platform,
        private readonly modalCtrl: ModalController,
    ) {}

    ngOnInit() {
        this.invitations$ = this.partyInvitationsQueryGQL
            .watch(
                {
                    where: {
                        partyId: this.party.id,
                    },
                },
                {
                    fetchPolicy: 'cache-and-network',
                },
            )
            .valueChanges.pipe(map((res) => res.data));
    }
}
