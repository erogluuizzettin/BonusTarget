import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItemComponent } from "./menu-item/menu-item.component";

@Component({
  selector: 'bns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isMenuOpen = true;
  menuList: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuList = [
      { title: 'User', icon: 'fa fa-user', targetUrl: '/home/User' },
      { title: 'Role', icon: 'fa fa-user-check', targetUrl: '/home/Role' },
      { title: 'Product', icon: 'fa fa-cubes', targetUrl: '/target/Product' },
      { title: 'Category', icon: 'fa fa-shapes', targetUrl: '/target/Category' },
      { title: 'Salesman', icon: 'fa fa-id-badge', targetUrl: '/target/Salesman' },
      { title: 'Sales', icon: 'fa fa-shopping-cart"', targetUrl: '/target/Sales' },
      { title: 'Region', icon: 'fa fa-sitemap', targetUrl: '/target/Region' },
      { title: 'Target', icon: 'fa fa-bullsye', targetUrl: '/target/Target' }
    ];
  }

  menuClick(url: string) {
      this.router.navigateByUrl(url);
  }

  menuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
