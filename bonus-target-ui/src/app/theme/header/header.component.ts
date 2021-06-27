import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/home/services/authenticate.service';

@Component({
  selector: 'bns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
