import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartiesViewMusicPage } from './parties-view-music.page';
import { NgZorroAntdModule, NzButtonModule } from 'ng-zorro-antd';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';
import { TopTrackComponent } from './components/top-track/top-track.component';
import { Media } from '@ionic-native/media/ngx';

const routes: Routes = [
    {
        path: '',
        component: PartiesViewMusicPage,
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), NgZorroAntdModule, NzButtonModule],
    declarations: [PartiesViewMusicPage, TopTrackComponent],
    providers: [SpotifyAuth, Media],
})
export class PartiesViewMusicPageModule {}
