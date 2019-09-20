import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [LogoComponent],
    imports: [CommonModule, IonicModule],
    exports: [LogoComponent],
})
export class SharedModule {}
