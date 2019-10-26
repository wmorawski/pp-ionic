import { FormsModule } from '@angular/forms';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { StyledComponentsModule } from 'angular-styled-components';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { AvatarComponent } from './components/avatar/avatar.component';
import { Media } from '@ionic-native/media/ngx';
import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';

@NgModule({
    declarations: [LogoComponent, ShortNumberPipe, AvatarComponent, MusicPlayerComponent, MinuteSecondsPipe],
    imports: [CommonModule, IonicModule, StyledComponentsModule, FormsModule, NzSliderModule],
    providers: [Media],
    exports: [LogoComponent, ShortNumberPipe, AvatarComponent, MusicPlayerComponent, MinuteSecondsPipe],
})
export class SharedModule {}
