import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { AuthenticationService } from 'src/app/modules/home/services/authenticate.service';

@Component({
  selector: 'bns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('op') op: OverlayPanel;
  showProfile = false;

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.op.hide();
    this.authenticationService.logout();
  }
}
