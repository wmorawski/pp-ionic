import { PP_USER_ID } from './../../../../constants';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import {
    PartyQueryGQL,
    Party_LeavePartyGQL,
    Party,
    PartyInvitationsQueryGQL,
    JoinPartyMutationGQL,
    Party_JoinPublicPartyGQL,
    Party_DeletePartyGQL,
} from 'src/app/graphql/generated/types';
import { Observable } from 'rxjs';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';
import { map } from 'rxjs/operators';
import { NavController, Platform, ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { ActionSheetButton } from '@ionic/core';
import gql from 'graphql-tag';
import { PARTY_QUERY } from 'src/app/graphql/queries';

export const LEAVE_PARTY_MUTATION = gql`
    mutation Party_LeaveParty($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateUser(data: $data, where: $where) {
            id
        }
    }
`;

export const JOIN_PUBLIC_PARTY_MUTATION = gql`
    mutation Party_JoinPublicParty($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateUser(data: $data, where: $where) {
            id
        }
    }
`;

export const DELETE_PARTY_MUTATION = gql`
    mutation Party_DeleteParty($where: PartyWhereUniqueInput!) {
        deleteParty(where: $where) {
            id
        }
    }
`;

@Component({
    selector: 'app-view',
    templateUrl: './view.page.html',
    styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
    id;
    party: Observable<any>;
    loading = true;
    constructor(
        private router: ActivatedRoute,
        private appService: AppService,
        private partyQueryGQL: PartyQueryGQL,
        private navCtrl: NavController,
        private platform: Platform,
        private readonly asCtrl: ActionSheetController,
        private readonly alertCtrl: AlertController,
        private readonly toastCtrl: ToastController,
        private readonly leavePartyMutationGQL: Party_LeavePartyGQL,
        private readonly deletePartyMutationGQL: Party_DeletePartyGQL,
        private readonly partyInvitationsQueryGQL: PartyInvitationsQueryGQL,
        private readonly joinPartyMutationGQL: JoinPartyMutationGQL,
        private readonly joinPublicPartyMutationGQL: Party_JoinPublicPartyGQL
    ) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.id = this.router.snapshot.params.id;
        this.party = this.partyQueryGQL.watch(getPartyVariables(this.id)).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                return result.data.party;
            })
        );
        this.party.subscribe((party: Party) => {
            if (!party || (!party.members.some(member => member.id === localStorage.getItem(PP_USER_ID)) && !party.isPublic)) {
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

    private async startLeavingPartyProcess() {
        (
            await this.alertCtrl.create({
                header: 'Are you sure you want to leave this party?',
                message: 'You will be able to re-join later, either by an direct invitation or by joining manually if party is public.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    },
                    {
                        text: 'Leave party',
                        role: 'destructive',
                        handler: this.handleLeaveParty.bind(this),
                    },
                ],
            })
        ).present();

        return true;
    }

    private async startDeletingPartyProcess() {
        (
            await this.alertCtrl.create({
                header: 'Are you sure you want to delete this party?',
                message: 'This action is irreversible!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    },
                    {
                        text: 'Delete party',
                        role: 'destructive',
                        handler: this.handleDeleteParty.bind(this),
                    },
                ],
            })
        ).present();

        return true;
    }

    private async showToast(message: string) {
        (
            await this.toastCtrl.create({
                message,
                duration: 3000,
            })
        ).present();
    }

    private handleLeaveParty() {
        this.leavePartyMutationGQL
            .mutate(
                {
                    where: { id: localStorage.getItem(PP_USER_ID) },
                    data: {
                        parties: {
                            disconnect: [{ id: this.id }],
                        },
                    },
                },
                {
                    refetchQueries: [
                        {
                            query: PARTY_QUERY,
                            variables: getPartyVariables(this.id),
                        },
                    ],
                }
            )
            .subscribe(
                () => {
                    this.showToast('You left the party');
                },
                () => {
                    this.showToast('Something went wrong');
                }
            );
    }

    private handleDeleteParty() {
        this.deletePartyMutationGQL
            .mutate({
                where: { id: this.id },
            })
            .subscribe(
                () => {
                    this.showToast('Party has been deleted');
                    this.navCtrl.navigateBack('/parties');
                },
                () => {
                    this.showToast('Something went wrong');
                }
            );
    }

    private async handleJoinToParty(party: Party) {
        if (party.isPublic) {
            this.joinPublicPartyMutationGQL
                .mutate(
                    {
                        where: { id: localStorage.getItem(PP_USER_ID) },
                        data: {
                            parties: {
                                connect: [{ id: party.id }],
                            },
                        },
                    },
                    { refetchQueries: [{ query: PARTY_QUERY, variables: getPartyVariables(this.id) }] }
                )
                .subscribe(
                    () => {
                        this.showToast('You have joined to party');
                    },
                    () => {
                        this.showToast('Something went wrong');
                    }
                );
        } else {
            this.partyInvitationsQueryGQL
                .watch({ where: { partyId: this.id } }, { fetchPolicy: 'cache-and-network' })
                .valueChanges.pipe(map(res => res.data.partyInvitations))
                .subscribe(invitations => {
                    if (invitations.some(inv => inv.user.id === localStorage.getItem(PP_USER_ID))) {
                        this.joinPartyMutationGQL
                            .mutate(
                                { partyId: this.id },
                                { refetchQueries: [{ query: PARTY_QUERY, variables: getPartyVariables(this.id) }] }
                            )
                            .subscribe(
                                () => {
                                    this.showToast('You have joined to the party');
                                },
                                () => {
                                    this.showToast('Something went wrong');
                                }
                            );
                    }
                });
        }
        return true;
    }

    private getActionSheetButtons() {
        return new Promise<ActionSheetButton[]>((resolve, reject) => {
            this.party.subscribe(
                (party: Party) => {
                    let buttons: ActionSheetButton[] = [];
                    const userId = localStorage.getItem(PP_USER_ID);
                    if (party.members.some(member => member.id === userId) && party.author.id !== userId) {
                        buttons = [
                            {
                                text: 'Leave party',
                                role: 'destructive',
                                handler: this.startLeavingPartyProcess.bind(this),
                            },
                        ];
                    } else if (party.author.id === userId) {
                        buttons = [
                            {
                                text: 'Manage invitations',
                            },
                            {
                                text: 'Edit',
                            },
                            {
                                text: 'Delete',
                                role: 'destructive',
                                handler: () => {
                                    this.startDeletingPartyProcess();
                                },
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                            },
                        ];
                    } else if (party.isPublic) {
                        buttons = [
                            {
                                text: 'Join to party',
                                handler: () => {
                                    this.handleJoinToParty(party);
                                },
                            },
                        ];
                    }
                    resolve(buttons);
                },
                error => {
                    reject(error);
                }
            );
        });
    }

    async showActionSheet() {
        const buttons = await this.getActionSheetButtons();
        (
            await this.asCtrl.create({
                header: 'More actions',
                buttons,
            })
        ).present();
    }
}
