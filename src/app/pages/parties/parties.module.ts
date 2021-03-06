import { StyledComponentsModule } from 'angular-styled-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartiesPage } from './parties.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NzIconModule, NzButtonModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { MapBoxComponent } from '../../shared/components/map-box/map-box.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { MomentModule } from 'ngx-moment';
import { ViewPage } from './pages/view/view.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: PartiesPage,
    },
    { path: 'create', loadChildren: () => import('./pages/create/create.module').then((m) => m.CreatePageModule) },
    { path: 'join/:id', loadChildren: () => import('./pages/join/join.module').then((m) => m.JoinPageModule) },
    {
        path: ':id',
        component: ViewPage,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren: () =>
                    import('src/app/pages/parties/pages/view/pages/parties-view-home/parties-view-home.module').then(
                        (m) => m.PartiesViewHomePageModule,
                    ),
            },
            {
                path: 'music',
                loadChildren: () =>
                    import('src/app/pages/parties/pages/view/pages/parties-view-music/parties-view-music.module').then(
                        (m) => m.PartiesViewMusicPageModule,
                    ),
            },
            {
                path: 'cart',
                loadChildren: () =>
                    import('src/app/pages/parties/pages/view/pages/parties-view-cart/parties-view-cart.module').then(
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
        NgZorroAntdMobileModule,
        NzButtonModule,
        NzIconModule,
        NgZorroAntdModule,
        NgxMapboxGLModule.withConfig({
            accessToken: environment.mapbox.accessToken,
        }),
        MomentModule,
        SharedModule,
        StyledComponentsModule,
    ],
    exports: [RouterModule],
    declarations: [PartiesPage, MapBoxComponent, ViewPage],
})
export class PartiesPageModule {}
