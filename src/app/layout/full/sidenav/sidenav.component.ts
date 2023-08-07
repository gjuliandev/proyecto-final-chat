import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/providers/store.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
  ]
})
export class SidenavComponent implements OnInit {

  user: any;
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.getState('userState')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.user = data.user;
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
