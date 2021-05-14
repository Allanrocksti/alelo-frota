import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderFilterService } from 'src/app/shared/services/header-filter.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  headerFilterVisible: boolean = false;

  constructor(
    private _router: Router,
    private _headerFilter: HeaderFilterService
  ) {}

  ngOnInit(): void {
    this._headerFilter
      .observableVisible()
      .subscribe((visible) => (this.headerFilterVisible = visible));
  }

  routerLinkActive(route: string): boolean {
    return !!this._router.url.match(route);
  }
}
