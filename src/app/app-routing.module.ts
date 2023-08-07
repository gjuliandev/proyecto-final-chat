import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { AuthGuard } from './guards/auth.guard';
import { BlankComponent } from './layout/blank/blank.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        redirectTo: '/chats',
        pathMatch: 'full'
      },
      {
        path: 'chats',
        loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfileModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    
      },
    ]
  },
  
  {
    path: '**',
    redirectTo: 'auth/404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
