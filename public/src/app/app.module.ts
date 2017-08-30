import { NgModule } from '@angular/core'


import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module'

import { LoginService } from './login.service'

import { AppComponent } from './app.component'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarloggedinComponent } from './navbarloggedin/navbarloggedin.component'
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    NavbarloggedinComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],

  providers: [
    LoginService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
