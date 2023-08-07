import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { IMensaje } from 'src/models/mensaje.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit {

  @Input() user: any;
  
  public mensajes: Array<IMensaje> = [];
  
  constructor(
    public firebaseService: FirebaseService
  ) {   ;}

  ngAfterViewInit(): void {
    this.firebaseService.getMessages()
  }

}
