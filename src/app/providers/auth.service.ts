import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { ACTION_SET_CURRENT_USER } from 'src/store/action/appActions';


import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { IUser } from 'src/models/user.model';
import { IRegister } from 'src/models/register.model';
import { ILogin } from 'src/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: IUser;

  constructor(
    private storeService: StoreService
  ) { }


  public authenticate(loginData: ILogin) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, loginData.email, loginData.password);
  }

  public register(registerData: IRegister) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, registerData.email, registerData.password);
  }

  updateProfile() {
    const auth = getAuth();
    if(auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: "Jane Q. User", 
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      }).then(() => {
       
      }).catch((error) => {
        
      });
    }
  }

  isLoggedIn() {
    const auth = getAuth();
    return auth.currentUser ? true : false; 
  }

  public logout() {
    this.storeService.updateState({
      type: ACTION_SET_CURRENT_USER,
      payload: ''
    });
  }
}
