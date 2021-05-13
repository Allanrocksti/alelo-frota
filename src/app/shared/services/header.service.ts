import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _title: string = '';
  private _titleChange: BehaviorSubject<string> = new BehaviorSubject('');
  private _subtitle: string = '';
  private _subtitleChange: BehaviorSubject<string> = new BehaviorSubject('');

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    this._titleChange.next(title);
  }

  get subtitle() {
    return this._subtitle;
  }

  set subtitle(subtitle: string) {
    this._subtitle = subtitle;
    this._subtitleChange.next(subtitle);
  }

  observableTitle(): Observable<string> {
    return this._titleChange.asObservable();
  }

  observableSubtitle(): Observable<string> {
    return this._subtitleChange.asObservable();
  }
}
