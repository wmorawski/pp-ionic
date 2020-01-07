import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MorePage } from './more.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const routes: Routes = [
    {
        path: '',
        component: MorePage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdMobileModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
    ],
    declarations: [MorePage, UserEditModalComponent],
    entryComponents: [UserEditModalComponent],
})
export class MorePageModule {}
