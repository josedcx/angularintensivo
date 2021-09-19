import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { MenuService } from '../../_components/menu/menu.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ MenuService ]
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav:any;
  public settings:Settings;
  public showSidenav:boolean = false;
  public toggleSearchBar:boolean = false;
  private defaultMenu!: string;

  constructor(public appSettings:AppSettings, public router:Router, private menuService: MenuService){
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    if(window.innerWidth <= 960){
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
  }

  ngAfterViewInit(){
    setTimeout(() => { this.settings.loadingSpinner = false }, 300);
    this.router.events.subscribe(event => {
      if(window.innerWidth <= 960){
        this.sidenav.close();
      }
    });
    if(this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    if(window.innerWidth <= 960){
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else{
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

}
