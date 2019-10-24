import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartiesViewMusicPage } from './parties-view-music.page';
import { NgZorroAntdModule, NzButtonModule } from 'ng-zorro-antd';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';

const routes: Routes = [
    {
        path: '',
        component: PartiesViewMusicPage,
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), NgZorroAntdModule, NzButtonModule],
    declarations: [PartiesViewMusicPage],
    providers: [SpotifyAuth],
})
export class PartiesViewMusicPageModule {}
