import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { StoreService } from 'src/app/providers/store.service';
import { IMensaje } from 'src/models/mensaje.model';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit, AfterViewInit {

  mensaje: string = '';
  public mensajes: Array<IMensaje> = [];
  @ViewChild('input') input!: ElementRef;
  
  constructor(
    public firebaseService: FirebaseService,
    private storeService: StoreService
  ) { }


  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.storeService.getState('userState')
      .subscribe({
        next: (resp) => {
          console.log(resp)
        },
        error: (err) => {
          console.log(err)
        }
      })
    this.firebaseService.getAllMensajes();
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
