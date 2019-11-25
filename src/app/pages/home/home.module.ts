import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainNavModule } from 'src/app/shared/components/navigation/main/main.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgZorroAntdMobileModule,
        NgZorroAntdModule,
        MainNavModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage,
            },
        ]),
    ],
    declarations: [HomePage],
})
export class HomePageModule {}
