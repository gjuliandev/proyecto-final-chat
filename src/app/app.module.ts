import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootReducer } from 'src/store/reducers/rootReducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     //Definicion del Store y asignación de root reducer
     StoreModule.forRoot( RootReducer, { }),
     // Definicion de uso de devtool
     StoreDevtoolsModule.instrument({
       maxAge: 5
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
