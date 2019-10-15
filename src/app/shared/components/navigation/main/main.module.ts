import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main.component';
import { IonicModule } from '@ionic/angular';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@NgModule({
    declarations: [MainNavComponent],
    imports: [CommonModule, IonicModule, NgZorroAntdMobileModule, NgZorroAntdModule, SharedModule],
    exports: [MainNavComponent],
})
export class MainNavModule {}
