import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderFilterService } from '../../services/header-filter.service';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss'],
})
export class HeaderFilterComponent implements OnInit {
  timeoutFilter: any;
  textFilter: string = '';

  constructor(
    private _router: Router,
    private _headerFilterService: HeaderFilterService
  ) {}

  ngOnInit(): void {}

  textFilterOnChange() {
    clearTimeout(this.timeoutFilter);

    this.timeoutFilter = setTimeout(
      () => (this._headerFilterService.textFilter = this.textFilter),
      500
    );
  }

  navigateToRegisterCar() {
    this._router.navigate(['admin/vehicle/register']);
  }
}
