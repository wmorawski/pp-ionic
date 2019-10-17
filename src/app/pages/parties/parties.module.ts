import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartiesPage } from './parties.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NzIconModule, NzButtonModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { PartyItemComponent } from './components/party-item/party-item.component';
import { MapBoxComponent } from '../../shared/components/map-box/map-box.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { MomentModule } from 'ngx-moment';
import { ViewPage } from './pages/view/view.page';

const routes: Routes = [
    {
        path: '',
        component: PartiesPage,
    },
    { path: 'create', loadChildren: './pages/create/create.module#CreatePageModule' },
    {
        path: ':id',
        component: ViewPage,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren:
                    'src/app/pages/parties/pages/view/pages/parties-view-home/parties-view-home.module#PartiesViewHomePageModule',
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
    ],
    exports: [RouterModule],
    declarations: [PartiesPage, PartyItemComponent, MapBoxComponent, ViewPage],
})
export class PartiesPageModule {}
