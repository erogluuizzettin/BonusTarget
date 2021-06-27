import { MenuComponent } from './theme/menu/menu.component';
import { Component, ViewChild } from '@angular/core';
import { AuthenticationService } from './modules/home/services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonus-target-ui';

  constructor(
    public authenticationService: AuthenticationService
  ) {
  }
}
