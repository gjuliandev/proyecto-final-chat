import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { IMensaje } from 'src/models/mensaje.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  
  mensaje: string = '';
  public mensajes: Array<IMensaje> = [];

  @ViewChild('input') input!: ElementRef;
  
  constructor(
    public firebaseService: FirebaseService,
  ) { }

  ngOnInit(): void {
  }

  public newMessage() {
    this.mensaje = (this.input.nativeElement.value).trim();
    if (this.mensaje ) {
      this.firebaseService.createMensaje(this.mensaje )
        .then( () => {
          this.mensaje = this.input.nativeElement.value = '';
        })
        .catch( (error) => console.log(error));
    }
  }

}
