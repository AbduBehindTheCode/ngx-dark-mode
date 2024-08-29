import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxDarkModeService {
  _darkModeStorageEnabled = signal(true);
  darkModeStorageEnabled = this._darkModeStorageEnabled.asReadonly();

  constructor() { }

  disableDarkModeStateStorage() {
    this._darkModeStorageEnabled.set(false);
    localStorage.removeItem('darkModeEnabled');
  }


  storeDarkModeState(state: boolean) {
    localStorage.setItem('darkModeEnabled', JSON.stringify(state));
  }

  getDarkModeState() {
    return this.darkModeStorageEnabled() 
      ? localStorage.getItem('darkModeEnabled') == 'true' 
      : false;
  }
}
