import { Component } from '@angular/core';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   constructor(
    private sidenavbarService: SidenavService,

   ){}

   toggleSideNav() {
    this.sidenavbarService.toggle();
   }

}
