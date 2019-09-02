import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

export interface SideNavListener{
  showNav(visible:boolean):void;
  sideNavToggle(opened:boolean):void;

}

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sideNav:MatSidenav;
  opened:boolean = false;
  showSideNav:boolean = false;
  listeners:SideNavListener[]=[];
  constructor() { }

  setSideNav(sideNav:MatSidenav){
    this.sideNav = sideNav;
  }

  public showNav(visible:boolean){
    this.showSideNav = visible;
    if (visible==false){
      if (this.isOpened()){
        this.toggelSideNav();
      }
    }else{
      if (!this.isOpened()){
        this.toggelSideNav();
      }
    }
    
    this.listeners.forEach(listn => listn.showNav(visible));

  }

  public addListener(listen:SideNavListener):void{
    this.listeners.push(listen);
  }

  public toggelSideNav(){
    this.sideNav.toggle();
    this.opened = !this.opened;
    this.listeners.forEach(listn => listn.sideNavToggle(this.opened));
  }
  public isOpened():boolean{
    return this.opened;
  }
}
