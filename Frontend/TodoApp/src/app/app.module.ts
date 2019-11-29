import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TokenService} from './TodoApp/tokenservice.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './TodoApp/login/login.component';
import { HomeComponent } from './TodoApp/home/home.component';
import { HeaderComponent } from './TodoApp/header/header.component';
import { FooterComponent } from './TodoApp/footer/footer.component';
import { TasklistComponent } from './TodoApp/tasklist/tasklist.component';
import { AddtaskComponent } from './TodoApp/addtask/addtask.component';
import { TodoService } from './TodoApp/todoservice.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TasklistComponent,
    AddtaskComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TokenService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
