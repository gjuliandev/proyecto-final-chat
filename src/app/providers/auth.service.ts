import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { ACTION_SET_CURRENT_USER } from 'src/store/action/appActions';


import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { IUser } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: IUser;

  constructor(
    private storeService: StoreService
  ) { }


  public authenticate() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'gjulian@test2.es', '4657489')
      .then((userCredential) => {
        // Logged in 
        const user = userCredential.user;
        this.storeService.updateState({
          type: ACTION_SET_CURRENT_USER,
          payload: 'gjulian'
        });
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  public register() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, 'gjulian@test3.es', '4657489')
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential);
      
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });    
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
