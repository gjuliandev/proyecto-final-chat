import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
   private store:Store<any>
  ) { }

   // Obtiene datos de un Store concreto
   getState(state: string) {
    return this.store.select(state);
  }

  // Despach acciones que el reducer utilza
  updateState( obj: any) {
    this.store.dispatch({
      type: obj.type,
      payload: obj.payload
    })
  }
}
