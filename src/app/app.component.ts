import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'proyecto-final-chat';

  constructor(private authService: AuthService) {}
  
  public login() {
   this.authService.authenticate(); 
  }

  public logout() {
    this.authService.logout();
  }
}
