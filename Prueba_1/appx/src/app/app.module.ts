import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { UserComponent } from './components/user/user.component';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';

import { APP_BASE_HREF } from '@angular/common';
import { TodosService } from './services/todo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  
    UserComponent,

  ],
  bootstrap: [
    AppComponent
  ],
  providers: [PostsService, UsersService, TodosService,
    {provide: APP_BASE_HREF, useValue: '/users'}
  ]
})
export class AppModule { }