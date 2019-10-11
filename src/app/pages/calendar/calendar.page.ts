import { Component, OnInit } from '@angular/core';
import { getPartiesDateVariables } from 'src/app/shared/helpers/graphql-utils';
import { PP_USER_ID } from '../../constants';
import { Apollo } from 'apollo-angular-boost';
import { PARTIES_QUERY } from 'src/app/graphql/queries';
import { map } from 'rxjs/operators';
import { Party } from 'src/app/graphql/types';
import dayGridPlugin from '@fullcalendar/daygrid';
import timelinePlugin from '@fullcalendar/timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
    partiesData: Party[];
    partiesLoading = false;
    parsedParties: any[] = [];
    calendarPlugins = [dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin];
    constructor(private readonly apollo: Apollo, private readonly navCtrl: NavController) {}

    ngOnInit() {}
    ionViewWillEnter() {
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
                    allDay: new Date(party!.start).getDate() !== new Date(party!.end).getDate(),
                    start: new Date(party!.start),
                    end: new Date(party!.end),
                    backgroundColor: party.colorTint,
                    borderColor: party.colorTint,
                }));
            });
    }

    handleDateClick(e) {
        this.navCtrl.navigateForward(['/calendar/day', e.dateStr]);
    }

    handleEventClick(e) {
        console.log(e);
    }
}
