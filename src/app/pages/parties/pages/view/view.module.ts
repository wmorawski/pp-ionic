import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { StyledComponentsModule } from 'angular-styled-components';

import { IonicModule } from '@ionic/angular';

import { ViewPage } from './view.page';

const routes: Routes = [
    {
        path: '/',
        component: ViewPage,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./pages/parties-view-home/parties-view-home.module').then(
                        (m) => m.PartiesViewHomePageModule,
                    ),
            },
            {
                path: 'music',
                loadChildren: () =>
                    import('./pages/parties-view-music/parties-view-music.module').then(
                        (m) => m.PartiesViewMusicPageModule,
                    ),
            },
            {
                path: 'cart',
                loadChildren: () =>
                    import('./pages/parties-view-cart/parties-view-cart.module').then(
                        (m) => m.PartiesViewCartPageModule,
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdModule,
        NzSpinModule,
        StyledComponentsModule,
    ],
})
export class ViewPageModule {}
