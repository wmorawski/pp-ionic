import { PARTIES_QUERY } from './../../../../graphql/queries';
import { CREATE_PARTY_MUTATION } from './../../../../graphql/mutations';
import { Apollo } from 'apollo-angular';
import { CreatePartyGQL, CreatePartyMutationVariables } from './../../../../graphql/generated/types';
import { MapboxService } from './../../../../services/mapbox.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { PP_USER_ID } from 'src/app/constants';
import uuid from 'uuid/v4';
import { ModalService } from 'ng-zorro-antd-mobile';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { getPartiesDateVariables } from 'src/app/shared/helpers/graphql-utils';

const MyAwesomeRangeValidator: ValidatorFn = (fg: FormGroup) => {
    const start = fg.get('dateStart').value;
    const end = fg.get('dateEnd').value;
    return start !== null && end !== null && start < end ? null : { range: true };
};

@Component({
    selector: 'app-create',
    templateUrl: './create.page.html',
    styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
    validateForm: FormGroup;
    minDate = null;
    maxYear = null;
    locations: any[];
    searchingForLocations = false;
    locationId = null;
    initialGroup = {
        title: [null, [Validators.required]],
        dateStart: [null, [Validators.required]],
        dateEnd: [null, [Validators.required]],
        decription: [null, [Validators.required]],
        isPublic: false,
        colorTint: '#4caf50',
        location: [null, [Validators.required]],
    };

    constructor(
        private fb: FormBuilder,
        private mapbox: MapboxService,
        private createPartyGQL: CreatePartyGQL,
        private apollo: Apollo,
        private modalService: ModalService,
        private navCtrl: NavController,
        private geolocation: Geolocation,
        private chr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.validateForm = this.fb.group({ ...this.initialGroup }, { validator: MyAwesomeRangeValidator });
    }

    submitForm(): void {
        // tslint:disable-next-line: forin
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        if (this.validateForm.valid) {
            const id = localStorage.getItem(PP_USER_ID);
            const formData = this.validateForm.value;
            const variables: CreatePartyMutationVariables = {
                data: {
                    title: formData.title,
                    start: formData.dateStart,
                    end: formData.dateEnd,
                    isPublic: formData.isPublic,
                    members: {
                        connect: [{ id }],
                    },
                    normalizedTitle: formData.title.toLowerCase().replace(/[ -.,]/g, ''),
                    description: formData.description,
                    author: {
                        connect: { id },
                    },
                    cart: {
                        create: {},
                    },
                    location: {
                        create: {
                            placeName: formData.location.place_name,
                            longitude: formData.location.center[0],
                            latitude: formData.location.center[1],
                        },
                    },
                    colorTint: formData.colorTint,
                    inviteSecret: uuid(),
                },
            };
            this.apollo
                .mutate<any>({
                    mutation: CREATE_PARTY_MUTATION,
                    variables,
                    update: (proxy, { data: { createParty } }) => {
                        try {
                            const data: any = proxy.readQuery({
                                query: PARTIES_QUERY,
                                variables: getPartiesDateVariables(new Date(), localStorage.getItem(PP_USER_ID)),
                            });
                            data.parties = [createParty, ...data.parties];
                            proxy.writeQuery({
                                query: PARTIES_QUERY,
                                data,
                                variables: getPartiesDateVariables(new Date(), localStorage.getItem(PP_USER_ID)),
                            });
                        } catch (e) {}
                    },
                })
                .subscribe(
                    (res) => {
                        this.modalService.alert(
                            'Party created!',
                            'Party has been successfully created and your friends has been notified.',
                            [
                                {
                                    text: 'Go to party dashboard',
                                    onPress: async () => {
                                        await this.navCtrl.navigateBack(['/parties', res.data.createParty.id]);
                                    },
                                },
                            ],
                        );
                    },
                    (err) => {
                        this.modalService.alert(
                            'Something went wrong',
                            'We were not able to create a party. Please try again',
                            [
                                {
                                    text: 'Close',
                                    onPress: () => {},
                                },
                            ],
                        );
                    },
                );
        }
    }

    ionViewWillEnter() {
        this.minDate = new Date().toISOString();
        this.maxYear = this.addDays(20).toISOString();
        this.validateForm.reset({ colorTint: this.initialGroup.colorTint });
    }

    currentDateFormat(date, format: string = 'yyyy-mm-dd HH:MM'): any {
        const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
        return format
            .replace('yyyy', date.getFullYear())
            .replace('mm', pad(date.getMonth() + 1))
            .replace('dd', pad(date.getDate()))
            .replace('HH', pad(date.getHours()))
            .replace('MM', pad(date.getMinutes()))
            .replace('ss', pad(date.getSeconds()));
    }

    handleColorChange($event) {
        this.validateForm.controls.colorTint.setValue($event.color.hex);
    }

    searchLocation(query) {
        if (query.length >= 3) {
            this.searchingForLocations = true;
            this.mapbox.searchLocation(query).subscribe((res: any) => {
                this.searchingForLocations = false;
                this.locations = res.features;
            });
        } else {
            this.locations = [];
        }
    }
    addDays(days) {
        const result = new Date();
        result.setDate(result.getDate() + days);
        return result;
    }

    locationSelected(id) {
        if (id) {
            const location = this.locations.find((loc) => loc.id === id);
            if (location) {
                this.validateForm.controls.location.setValue(location);
                console.log('selected', this.validateForm.controls.location.value);
            }
        }
    }

    async localizeMe() {
        this.searchingForLocations = true;
        const position = await this.geolocation.getCurrentPosition();
        this.mapbox.searchByPosition(position.coords.longitude, position.coords.latitude).subscribe((res: any) => {
            this.searchingForLocations = false;
            this.locations = res.features;
            this.chr.detectChanges();
            this.locationSelected(res.features[0].id);
        });
    }
}
