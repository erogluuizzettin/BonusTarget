import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/home/services/authenticate.service';

@Component({
  selector: 'bns-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
