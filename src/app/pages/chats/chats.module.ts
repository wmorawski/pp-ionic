import { StyledComponentsModule } from 'angular-styled-components';
import { AvatarModule } from 'ngx-avatar';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatsPage } from './chats.page';

const routes: Routes = [
    {
        path: '',
        component: ChatsPage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgZorroAntdModule,
        AvatarModule,
        StyledComponentsModule,
    ],
    declarations: [ChatsPage, ChatItemComponent],
})
export class ChatsPageModule {}
