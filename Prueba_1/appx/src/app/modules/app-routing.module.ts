import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';

import { UserComponent } from '../components/user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserComponent},

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {  useHash: true, paramsInheritanceStrategy: 'always' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }