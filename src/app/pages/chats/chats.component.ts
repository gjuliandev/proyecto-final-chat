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
export class ChatsComponent implements OnInit {

  mensaje: string = '';
  @ViewChild('input') input!: ElementRef;
  user: any;
  
  constructor(
    public firebaseService: FirebaseService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    
    this.storeService.getState('userState')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.user = data.user;
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

  public newMessage() {
    this.mensaje = (this.input.nativeElement.value).trim();
    if (this.mensaje ) {
      this.firebaseService.createMensaje(this.mensaje, this.user)
        .then( () => {
          this.mensaje = this.input.nativeElement.value = '';
        })
      //   .catch( (error) => console.log(error));
    }
  }

}
