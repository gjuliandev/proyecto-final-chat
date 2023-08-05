import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { FirebaseService } from './providers/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'CHAT - GJC';

  public mensaje = '';

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService
   ) {}
  
  public login() {
   this.authService.authenticate(); 
  }

  public logout() {
    this.authService.logout();
  }

  getMensajes() {
    this.firebaseService.getMensajes()
      .subscribe( {
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  public newMessage() {
    if (this.mensaje) {
      this.firebaseService.createMensaje(this.mensaje);
      this.mensaje = '';
    }
    
  }
}
