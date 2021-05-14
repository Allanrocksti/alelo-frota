import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderFilterService {
  private _visible: boolean = false;
  private _visibleChange: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private _textFilter: string = '';
  private _textFilterChange: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  get visible() {
    return this._visible;
  }

  set visible(visible: boolean) {
    this._visible = visible;
    this._visibleChange.next(visible);
  }

  get textFilter() {
    return this._textFilter;
  }

  set textFilter(textFilter: string) {
    this._textFilter = textFilter;
    this._textFilterChange.next(textFilter);
  }

  observableVisible(): Observable<boolean> {
    return this._visibleChange.asObservable();
  }

  observableTextFilter(): Observable<string> {
    return this._textFilterChange.asObservable();
  }
}
