import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PeopleUserComponent } from './components/people-user/people-user.component';
import { StyledComponentsModule } from 'angular-styled-components';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeoplePage } from './people.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { UserButtonPipe } from './pipes/user-button.pipe';

const routes: Routes = [
    {
        path: '',
        component: PeoplePage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdModule,
        NgZorroAntdMobileModule,
        StyledComponentsModule,
        NzSpinModule,
    ],
    declarations: [PeoplePage, PeopleUserComponent, UserButtonPipe],
})
export class PeoplePageModule {}
