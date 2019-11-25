import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from 'src/app/shared/shared.module';
import { StyledComponentsModule } from 'angular-styled-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';

const routes: Routes = [
    {
        path: '',
        component: RegisterPage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        StyledComponentsModule,
        SharedModule,
        ReactiveFormsModule,
        NgZorroAntdMobileModule,
        NgZorroAntdModule,
    ],
    declarations: [RegisterPage],
})
export class RegisterPageModule {}
