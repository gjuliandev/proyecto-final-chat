import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { StoreService } from 'src/app/providers/store.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user: any;
  constructor(
    private storeService: StoreService,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.user = this.firebaseService.getCurrentUser();
    
    // this.storeService.getState('userState')
    //   .subscribe({
    //     next: (data) => {
    //       console.log(data);
    //       this.user = data.user;
    //     },
    //     error: (err) => {
    //       console.log(err)
    //     }
    //   })
  }

  public logout() {
    this.router.navigateByUrl('/auth/login')
    this.firebaseService.logout();  
    
  }

}
