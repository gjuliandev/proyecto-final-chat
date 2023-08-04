import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { ACTION_SET_CURRENT_USER } from 'src/store/action/appActions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storeService: StoreService
  ) { }

  public authenticate() {
    this.storeService.updateState({
      type: ACTION_SET_CURRENT_USER,
      payload: 'gjulian'
    });
  }

  public logout() {
    this.storeService.updateState({
      type: ACTION_SET_CURRENT_USER,
      payload: ''
    });
  }
}
