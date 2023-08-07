import { Injectable, inject } from '@angular/core';

import { Firestore, addDoc, collection, getFirestore, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IMensaje } from 'src/models/mensaje.model';
import { limit, onSnapshot } from 'firebase/firestore';
import { StoreService } from './store.service';
import { ILogin } from 'src/models/login.model';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { IRegister } from 'src/models/register.model';


@Injectable({
  providedIn: 'root'
})
export class  FirebaseService {

  firestore: Firestore = inject(Firestore);
  public item$!: Observable<any[]>;
  db = getFirestore();
  collectionRef = collection(this.firestore, 'chats') as any;
  public user!: any;

  mensajes: Array<IMensaje> = [];

  constructor(
    // private storeService: StoreService,
  ) { }

  async getMessages() {

    this.mensajes = [];

    const q =  query(this.collectionRef,
      orderBy('fecha', 'asc'), 
      limit(30)
    );

    onSnapshot(q,   
      (querySnapshot) => {
        this.mensajes = [];
        querySnapshot.forEach((doc:any) => {
          this.mensajes.push(doc.data());
        });
      },
      (error) => {
        console.log(error)
      });

    
   
  }

  async getMensajesByUid(uid: string) {

    this.mensajes = [];

    const q =  query(this.collectionRef,
      // where('uid', '==', this.user.uid),
      orderBy('fecha', 'asc'), 
      limit(30)
    );

    onSnapshot(q,   
      (querySnapshot) => {
        this.mensajes = [];
        querySnapshot.forEach((doc:any) => {
          console.log(doc.data())
          this.mensajes.push(doc.data());
        });
      },
      (error) => {
        console.log(error)
      });

  }

  async createMensaje(texto: string, user: any) {
    const body = { 
      nombre: user.nombre || 'no-name',
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: user.uid
    }
    return addDoc(this.collectionRef, body);
  }



  // AUTH

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

  public isLoggedIn(): boolean {
    const auth = getAuth();
    return auth.currentUser ? true : false; 
  }

  public getCurrentUser() {
    const auth = getAuth();
    return auth.currentUser;
  }

  public logout() {
    const auth = getAuth();
      signOut(auth).then(() => {
        console.log('logout sucessfully')
        // this.storeService.updateState({
        //   type: ACTION_SET_CURRENT_USER,
        //   payload: ''
        // });
      }).catch((error) => {
        console.log(error)
      });

    
  }
  
}
