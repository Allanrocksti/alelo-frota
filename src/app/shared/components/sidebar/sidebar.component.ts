import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  appName: string = environment.appName;

  constructor(private _router: Router) { }

  navigateTo(route: string) {
    this._router.navigate([route])
  }

  routerLinkActive(route: string): boolean {
    return !!this._router.url.match(route)
  }

}
