import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { FirebaseService } from './providers/firebase.service';
import { IMensaje } from 'src/models/mensaje.model';
import { debounceTime, distinctUntilChanged, fromEvent, tap } from 'rxjs';
import { StoreService } from './providers/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  title = 'CHAT - GJC';

  constructor(
    private authService: AuthService,
    public firebaseService: FirebaseService,
   ) {}
  
  
  public logout() {
    this.authService.logout();  
  }
  
}
