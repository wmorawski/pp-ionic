import { Component, OnInit } from '@angular/core';
import { Party } from 'src/app/graphql/types';
import { Apollo } from 'apollo-angular';
import { PARTIES_QUERY } from 'src/app/graphql/queries';
import { getPartiesDateVariables } from 'src/app/shared/helpers/graphql-utils';
import { PP_USER_ID } from 'src/app/constants';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-day',
    templateUrl: './day.page.html',
    styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
    partiesData: Party[];
    partiesLoading = false;
    parsedParties: any[] = [];
    calendarPlugins = [timeGridPlugin, interactionPlugin];
    startDateStr: string;
    constructor(private readonly apollo: Apollo, public readonly router: ActivatedRoute, private readonly navCtrl: NavController) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.startDateStr = this.router.snapshot.params.date;
        this.apollo
            .watchQuery<any>({
                query: PARTIES_QUERY,
                variables: getPartiesDateVariables(new Date(), localStorage.getItem(PP_USER_ID)),
            })
            .valueChanges.subscribe(res => {
                const { data: partiesData, loading: partiesLoading } = res;
                this.partiesData = partiesData.parties;
                this.partiesLoading = partiesLoading;
                this.parsedParties = partiesData.parties.map(party => ({
                    ...party,
                    start: new Date(party!.start),
                    end: new Date(party!.end),
                    backgroundColor: party.colorTint,
                    borderColor: party.colorTint,
                }));
            });
    }

    handleEventClick(e) {
        this.navCtrl.navigateForward(['/parties', e.event.id]);
    }
}
