import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { FirebaseService } from '../providers/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if ( this.firebaseService.isLoggedIn()  ) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
  
}
