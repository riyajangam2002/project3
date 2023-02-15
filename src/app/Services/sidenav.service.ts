import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sideNavToggleSubject = new Subject<any>;
  // toggle() {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }

  public toggle() {
    console.log('NAV toggle');
    return this.sideNavToggleSubject.next(null);
  }
}
