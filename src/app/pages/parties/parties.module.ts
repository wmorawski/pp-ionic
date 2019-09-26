import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartiesPage } from './parties.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NzIconModule } from 'ng-zorro-antd';
import { PartyItemComponent } from './components/party-item/party-item.component';

const routes: Routes = [
    {
        path: '',
        component: PartiesPage,
    },
    { path: 'create', loadChildren: './pages/create/create.module#CreatePageModule' },
    { path: ':id', loadChildren: './pages/view/view.module#ViewPageModule' },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdMobileModule,
        NzIconModule,
    ],
    declarations: [PartiesPage, PartyItemComponent],
})
export class PartiesPageModule {}
