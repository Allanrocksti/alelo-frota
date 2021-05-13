import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-menu-mobile',
  templateUrl: './floating-menu-mobile.component.html',
  styleUrls: ['./floating-menu-mobile.component.scss']
})
export class FloatingMenuMobileComponent {

  constructor(private _router: Router) { }

  navigateTo(route: string) {
    this._router.navigate([route])
  }

  routerLinkActive(route: string): boolean {
    return !!this._router.url.match(route)
  }
}
