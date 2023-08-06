import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { StoreService } from 'src/app/providers/store.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  lastItem: any;

  constructor(
    public firebaseService: FirebaseService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    // this.lastItem.scrollTop = this.lastItem.scrollHeight;
    this.storeService.getState('userState')
      .subscribe( resp => console.log(resp));

    this.firebaseService.getAllMensajes();


  }

}
