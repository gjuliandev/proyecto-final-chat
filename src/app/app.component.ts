import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { FirebaseService } from './providers/firebase.service';
import { IMensaje } from 'src/models/mensaje.model';
import { debounceTime, distinctUntilChanged, fromEvent, tap } from 'rxjs';
import { StoreService } from './providers/store.service';
import { IRegister } from 'src/models/register.model';
import { ILogin } from 'src/models/login.model';
import { ACTION_SET_CURRENT_USER } from 'src/store/action/appActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'CHAT - GJC';

  mensaje: string = '';
  public mensajes: Array<IMensaje> = [];

  @ViewChild('input') input!: ElementRef;

  constructor(
    private authService: AuthService,
    public firebaseService: FirebaseService,
    private storeService: StoreService
   ) {}

   ngAfterViewInit(): void {
    this.firebaseService.getAllMensajes();
  }
  



  public logout() {
    this.authService.logout();  
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
