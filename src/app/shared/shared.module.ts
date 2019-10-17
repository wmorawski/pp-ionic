import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
    declarations: [LogoComponent, ShortNumberPipe],
    imports: [CommonModule, IonicModule],
    exports: [LogoComponent, ShortNumberPipe],
})
export class SharedModule {}
