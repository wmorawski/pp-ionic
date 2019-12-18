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
    ],
    declarations: [PartiesViewCartPage, AddToCartModalComponent],
    entryComponents: [AddToCartModalComponent],
})
export class PartiesViewCartPageModule {}
