import { Injectable, inject } from '@angular/core';

import { Firestore, addDoc, collection, getFirestore, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IMensaje } from 'src/models/mensaje.model';
import { limit, onSnapshot } from 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore: Firestore = inject(Firestore);
  public item$!: Observable<any[]>;
  db = getFirestore();
  collectionRef = collection(this.firestore, 'chats') as any;

  mensajes: Array<IMensaje> = [];

  constructor() { }

  getAllMensajes() {

    this.mensajes = [];

    const q =  query(this.collectionRef,
      orderBy('fecha', 'asc'), 
      limit(30)
    );

    onSnapshot(q, (querySnapshot) => {
      this.mensajes = [];
      querySnapshot.forEach( async (doc: any) => {
        this.mensajes.push(doc.data());
      });
    });

  }

  createMensaje(texto: string) {
    const body = { 
      nombre: 'Gabriel',
      mensaje: texto,
      fecha: new Date().getTime() 
    }
    return addDoc(this.collectionRef, body);
  }


}
