import { MembersModalComponent } from './../../components/modals/members-modal/members-modal.component';
import { InvitesModalComponent } from './../../components/modals/invites-modal/invites-modal.component';
import { QrModalComponent } from './../../components/modals/qr-modal/qr-modal.component';
import { MomentModule } from 'ngx-moment';
import { MetaInfoComponent } from './../../components/meta-info/meta-info.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavButtonComponent } from './../../components/nav-button/nav-button.component';
import { NgModule } from '@angular/core';
import { CommonModule, I18nPluralPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';

import { PartiesViewHomePage } from './parties-view-home.page';
import { StyledComponentsModule } from 'angular-styled-components';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
    {
        path: '',
        component: PartiesViewHomePage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        QRCodeModule,
        StyledComponentsModule,
        NgZorroAntdModule,
        NgZorroAntdMobileModule,
        SharedModule,
        MomentModule,
        AvatarModule,
    ],
    providers: [I18nPluralPipe, Geolocation],
    declarations: [
        PartiesViewHomePage,
        NavButtonComponent,
        MetaInfoComponent,
        QrModalComponent,
        InvitesModalComponent,
        MembersModalComponent,
    ],
    entryComponents: [QrModalComponent, InvitesModalComponent, MembersModalComponent],
})
export class PartiesViewHomePageModule {}
