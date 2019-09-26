import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreatePage } from './create.page';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { ColorCircleModule } from 'ngx-color/circle'; // <color-circle></color-circle>

const routes: Routes = [
    {
        path: '',
        component: CreatePage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdModule,
        ReactiveFormsModule,
        NgZorroAntdMobileModule,
        ColorCircleModule,
    ],

    declarations: [CreatePage],
})
export class CreatePageModule {}
