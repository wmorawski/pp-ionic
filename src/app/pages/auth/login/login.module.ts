import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { Facebook } from '@ionic-native/facebook/ngx';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';
import { GraphqlErrorComponent } from 'src/app/shared/components/graphql-error/graphql-error.component';

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), NgZorroAntdMobileModule],
    providers: [Facebook, SpotifyAuth],
    declarations: [LoginPage, GraphqlErrorComponent],
})
export class LoginPageModule {}
