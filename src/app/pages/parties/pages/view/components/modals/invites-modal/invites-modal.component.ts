import { map } from 'rxjs/operators';
import { Party, PartyInvitationsQueryGQL } from './../../../../../../../graphql/types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-invites-modal',
    templateUrl: './invites-modal.component.html',
    styleUrls: ['./invites-modal.component.scss'],
})
export class InvitesModalComponent implements OnInit {
    @Input() party: Party;
    invitations$;

    constructor(private readonly partyInvitationsQueryGQL: PartyInvitationsQueryGQL) {}

    ngOnInit() {
        this.invitations$ = this.partyInvitationsQueryGQL
            .watch(
                {
                    where: {
                        partyId: this.party.id,
                    },
                },
                {
                    fetchPolicy: 'network-only',
                }
            )
            .valueChanges.pipe(map((res) => res.data.partyInvitations));
    }
}
