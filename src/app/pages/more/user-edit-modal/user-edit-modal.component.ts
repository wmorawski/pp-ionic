import { ToastController } from '@ionic/angular';
import { PP_USER_ID } from 'src/app/constants';
import {
    MeQueryGQL,
    User_UserInfoGQL,
    User_UpdatePrivacyGQL,
    MeQueryDocument,
    MeQueryMe,
} from './../../../graphql/generated/types';
import { Component, OnInit, OnDestroy } from '@angular/core';
import gql from 'graphql-tag';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

export const USER_INFO_MUTATION = gql`
    mutation User_UserInfo($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateUser(data: $data, where: $where) {
            id
        }
    }
`;

const informationFragment = gql`
    fragment INFORMATION_FRAGMENT on User {
        firstName
        lastName
    }
`;

export const UPDATE_USER_PRIVACY_MUTATION = gql`
    mutation User_UpdatePrivacy($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateUser(where: $where, data: $data) {
            id
        }
    }
`;

const USER_PRIVACY_FRAGMENT = gql`
    fragment USER_PRIVACY_FRAGMENT on User {
        isPrivate
    }
`;

@Component({
    selector: 'app-user-edit-modal',
    templateUrl: './user-edit-modal.component.html',
    styleUrls: ['./user-edit-modal.component.scss'],
})
export class UserEditModalComponent implements OnInit, OnDestroy {
    aboutSubscription;
    privacySubscription;
    aboutForm = new FormGroup({
        firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
    privacyForm = new FormGroup({
        visible: new FormControl(false, []),
    });
    constructor(
        private readonly meGQL: MeQueryGQL,
        private readonly userInfoGQL: User_UserInfoGQL,
        private readonly userPrivacyGQL: User_UpdatePrivacyGQL,
        private readonly toastCtrl: ToastController,
    ) {}

    ngOnInit() {
        this.meGQL
            .watch({}, { fetchPolicy: 'cache-and-network' })
            .valueChanges.pipe(map((u) => (u.data ? u.data.me : ({} as any))))
            .subscribe((me: MeQueryMe) => {
                console.log(me);
                this.aboutForm.get('firstName').setValue(me.firstName);
                this.aboutForm.get('lastName').setValue(me.lastName);
                this.privacyForm.get('visible').setValue(!me.isPrivate);
            });
    }

    onPrivacySubmit() {
        this.privacySubscription = this.userPrivacyGQL
            .mutate(
                {
                    where: {
                        id: localStorage.getItem(PP_USER_ID),
                    },
                    data: {
                        isPrivate: !this.privacyForm.get('visible').value,
                    },
                },
                {
                    refetchQueries: [
                        {
                            query: MeQueryDocument,
                            variables: {},
                        },
                    ],
                },
            )
            .subscribe(() => {
                this.showToast('Your profile has been updated');
            });
    }
    onAboutSubmit() {
        this.aboutSubscription = this.userInfoGQL
            .mutate(
                {
                    where: {
                        id: localStorage.getItem(PP_USER_ID),
                    },
                    data: {
                        firstName: this.aboutForm.get('firstName').value,
                        lastName: this.aboutForm.get('lastName').value,
                    },
                },
                {
                    refetchQueries: [
                        {
                            query: MeQueryDocument,
                            variables: {},
                        },
                    ],
                },
            )
            .subscribe(() => {
                this.showToast('Your profile has been updated');
            });
    }
    private async showToast(message: string) {
        (
            await this.toastCtrl.create({
                message,
                duration: 3000,
            })
        ).present();
    }

    ngOnDestroy() {
        if (this.privacySubscription) {
            this.privacySubscription.unsubscribe();
        }
        if (this.aboutSubscription) {
            this.aboutSubscription.unsubscribe();
        }
    }
}
