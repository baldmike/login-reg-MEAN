import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbarloggedin',
  templateUrl: './navbarloggedin.component.html',
  styleUrls: ['./navbarloggedin.component.css']
})
export class NavbarloggedinComponent implements OnInit {

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  logoutUser() {
    this._loginService.logout().then(response => {
      this._router.navigateByUrl('/login');
    }).catch(err => console.log(err));
  }

}
