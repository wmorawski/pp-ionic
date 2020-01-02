import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { GraphqlErrorComponent } from 'src/app/shared/components/graphql-error/graphql-error.component';
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
import { PartyItemComponent } from './components/party-item/party-item.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NzButtonModule, NzIconModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { MomentModule } from 'ngx-moment';
import { CalculateEstimatedCostPipe } from './pipes/calculate-estimated-cost.pipe';

@NgModule({
    declarations: [
        LogoComponent,
        ShortNumberPipe,
        AvatarComponent,
        MusicPlayerComponent,
        MinuteSecondsPipe,
        GraphqlErrorComponent,
        PartyItemComponent,
        HeaderComponent,
        CalculateEstimatedCostPipe,
    ],
    imports: [
        CommonModule,
        IonicModule,
        StyledComponentsModule,
        FormsModule,
        NzSliderModule,
        CommonModule,
        FormsModule,
        RouterModule,
        IonicModule,
        NgZorroAntdMobileModule,
        NzButtonModule,
        NzIconModule,
        NgZorroAntdModule,
        MomentModule,
    ],
    providers: [Media],
    exports: [
        LogoComponent,
        ShortNumberPipe,
        AvatarComponent,
        MusicPlayerComponent,
        MinuteSecondsPipe,
        GraphqlErrorComponent,
        PartyItemComponent,
        HeaderComponent,
        CalculateEstimatedCostPipe,
    ],
})
export class SharedModule {}
