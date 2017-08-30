import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    pathMatch: 'full',
    component : RegisterComponent
  },

  {
    path: 'home',
    children: [],
    pathMatch: 'full',
    component: HomeComponent
  },

  {
    path: 'login',
    children: [],
    pathMatch: 'full',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
