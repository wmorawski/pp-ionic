import { NgModule } from '@angular/core';
import { CommonModule, I18nPluralPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';

import { PartiesViewHomePage } from './parties-view-home.page';

const routes: Routes = [
    {
        path: '',
        component: PartiesViewHomePage,
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), QRCodeModule],
    providers: [I18nPluralPipe],
    declarations: [PartiesViewHomePage],
})
export class PartiesViewHomePageModule {}
