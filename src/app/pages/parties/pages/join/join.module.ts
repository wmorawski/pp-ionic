import { StyledComponentsModule } from 'angular-styled-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoinPage } from './join.page';

const routes: Routes = [
    {
        path: '',
        component: JoinPage,
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), StyledComponentsModule],
    declarations: [JoinPage],
})
export class JoinPageModule {}
