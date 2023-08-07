import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ChatsComponent } from './chats.component';


@NgModule({
  declarations: [
    ChatsComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
