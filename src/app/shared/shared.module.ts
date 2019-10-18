import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
    declarations: [LogoComponent, ShortNumberPipe, AvatarComponent],
    imports: [CommonModule, IonicModule],
    exports: [LogoComponent, ShortNumberPipe, AvatarComponent],
})
export class SharedModule {}
