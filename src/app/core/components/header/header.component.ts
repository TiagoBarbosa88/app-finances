import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  btnlogin: string = 'login';
  btnlogout: string = 'logout';

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onLogin(e: Event) {
    e.preventDefault();
    console.log("Clicou no Login");
    this.router.navigate(['transaction']);
  }

  logout(): void {
    this.afAuth.signOut();
  }
}
