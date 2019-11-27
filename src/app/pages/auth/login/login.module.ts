import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { Facebook } from '@ionic-native/facebook/ngx';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdMobileModule,
        SharedModule,
    ],
    providers: [Facebook, SpotifyAuth],
    declarations: [LoginPage],
})
export class LoginPageModule {}
