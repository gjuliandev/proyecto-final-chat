import { Injectable, inject } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { DocumentReference, Firestore,doc,  addDoc, collection, collectionData, getDoc, getDocs, getFirestore, query, updateDoc, where, deleteDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore: Firestore = inject(Firestore);
  public item$!: Observable<any[]>;
  db = getFirestore();
  collectionRef = collection(this.firestore, 'chats') as any;
  docRef: any;

  constructor() { }

  getMensajes() {
    const itemCollection = collection(this.firestore, 'chats') as any;
    return this.item$ = collectionData(itemCollection);
  }

  createMensaje(mensaje: string) {
    const itemCollection = collection(this.firestore, 'chats') as any;
    const body = { mensaje: mensaje }
    addDoc(itemCollection, body);
  }
  

 
 

}
