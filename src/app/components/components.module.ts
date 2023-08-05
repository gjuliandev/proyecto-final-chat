import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats/chats.component';



@NgModule({
  declarations: [
    ChatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ChatsComponent]
})
export class ComponentsModule { }
