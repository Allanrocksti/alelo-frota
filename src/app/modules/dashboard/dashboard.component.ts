import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _headerService: HeaderService) { }

  ngOnInit(): void {
    this._headerService.title = 'Dashboard'
    this._headerService.subtitle = ''
  }

}
