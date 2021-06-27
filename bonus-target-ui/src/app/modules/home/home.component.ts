import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authenticate.service';

@Component({
  selector: 'bns-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.userName) {
      this.router.navigateByUrl('/home/Dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
