import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  constructor() { }

  private _isVisible: boolean = true;

  visibilityChanged = new Subject<any>();

  getvisibility() {
    return this.visibilityChanged.next(this._isVisible)
  }

  setVisibility(value: boolean) {
    this._isVisible = value;
    this.visibilityChanged.next(this._isVisible)
  }
}
