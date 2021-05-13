import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName: string = environment.appName;

  title: string = '';
  subtitle: string = '';

  constructor(private _headerService: HeaderService) { }

  ngOnInit() {
    this._headerService.observableTitle().subscribe(title => this.title = title);
    this._headerService.observableSubtitle().subscribe(subtitle => this.subtitle = subtitle);
  }
}
