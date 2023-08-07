import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import { StoreService } from 'src/app/providers/store.service';
import { ILogin } from 'src/models/login.model';
import { ACTION_SET_CURRENT_USER } from 'src/store/action/appActions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public async login() {
   
    const loginData: ILogin = {
     email: 'gjulian@gmail.com',
     password: '123456'
    }
    this.authService.authenticate(loginData)
       .then((userCredential) => {
         // Logged in 
         const user = userCredential.user;

         console.log('user', user)
        
         // Guardamos en el store redux el usuario
         this.storeService.updateState({
           type: ACTION_SET_CURRENT_USER,
           payload: user
         });
 
         this.router.navigateByUrl('/chats');
            
       })
       .catch((error) => {
       
         const errorCode = error.code
         const errorMessage = error.message;
     
       });
   }

}
