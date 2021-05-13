import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  appName: string = environment.appName;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route: string) {
    this._router.navigate([route])
  }

  routerLinkActive(route: string): boolean {
    return !!this._router.url.match(route)
  }

}
