import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './Services/sidenav.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project3';

 
  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  constructor(
    private router: Router,
    private sidenavbarService: SidenavService,
  ) { }

  isOpened = true;

  ngOnInit(): void {
    this.router.navigate(['/dashboard'])
    this.sidenavbarService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle()
      
    })
  }

  toggleSideNav() {
    this.sidenavbarService.toggle();
    this.isOpened = !this.isOpened;
  }

}
