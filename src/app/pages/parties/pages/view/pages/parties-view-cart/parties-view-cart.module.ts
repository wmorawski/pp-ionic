import { SharedModule } from 'src/app/shared/shared.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PartyCartItemComponent } from './components/party-cart-item/party-cart-item.component';
import { StyledComponentsModule } from 'angular-styled-components';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AddToCartModalComponent } from './../../components/modals/add-to-cart-modal/add-to-cart-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartiesViewCartPage } from './parties-view-cart.page';

const routes: Routes = [
    {
        path: '',
        component: PartiesViewCartPage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgZorroAntdModule,
        NzSpinModule,
        StyledComponentsModule,
        SharedModule,
    ],
    declarations: [PartiesViewCartPage, AddToCartModalComponent, PartyCartItemComponent],
    entryComponents: [AddToCartModalComponent],
})
export class PartiesViewCartPageModule {}
