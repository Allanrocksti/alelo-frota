import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private _headerService: HeaderService) { }

  ngOnInit(): void {
    this._headerService.title = 'Reports'
    this._headerService.subtitle = ''
  }
}
