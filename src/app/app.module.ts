import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

// REDUX
import { RootReducer } from 'src/store/reducers/rootReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

// FIREBASE
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { FullComponent } from './layout/full/full.component';
import { SidenavComponent } from './layout/full/sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // REDUX
     //Definicion del Store y asignación de root reducer
     StoreModule.forRoot( RootReducer, { }),
     // Definicion de uso de devtool
     StoreDevtoolsModule.instrument({
       maxAge: 5
     }),

     // FIREBASE
     provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideAuth(() => getAuth()),
     provideDatabase(() => getDatabase()),
     provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
