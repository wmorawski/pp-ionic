import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
    {
        path: '',
        component: CalendarPage,
    },
    { path: 'day/:date', loadChildren: () => import('./pages/day/day.module').then((m) => m.DayPageModule) },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), FullCalendarModule],
    declarations: [CalendarPage],
})
export class CalendarPageModule {}
