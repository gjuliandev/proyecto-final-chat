import { AfterViewInit, Component } from '@angular/core';
import { FirebaseService } from './providers/firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'CHAT - GJC';

  constructor(
    // public firebaseService: FirebaseService,
   ) {}

   ngAfterViewInit(): void {
    // this.firebaseService.getAllMensajes();
   }

}
