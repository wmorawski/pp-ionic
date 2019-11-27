import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewPage } from './view.page';

const routes: Routes = [
    {
        path: '/',
        component: ViewPage,
        children: [
            {
                path: 'home',
                loadChildren: './pages/parties-view-home/parties-view-home.module#PartiesViewHomePageModule',
            },
            {
                path: 'music',
                loadChildren: './pages/parties-view-music/parties-view-music.module#PartiesViewMusicPageModule',
            },
        ],
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), NgZorroAntdModule],
})
export class ViewPageModule {}
