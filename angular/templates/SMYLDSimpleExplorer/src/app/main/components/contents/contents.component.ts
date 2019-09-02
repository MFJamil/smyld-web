import { Component, OnInit, ViewChild,  AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from '../../services/side-nav.service';
import { ActivatedRoute, Router } from '@angular/router';
import {modules, Module}  from '../../model/Module';
import {Location} from '@angular/common';
import { MessageService } from '../../services/message.service';
import { LogUtils } from 'src/app/utils/LogUtils';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.sass']
})
export class ContentsComponent implements OnInit,AfterViewInit {
  
  public activeModule: Module;
  @ViewChild('appSideNav',{static:true}) public sideNav:MatSidenav;
  
  constructor(
    private sideNavService:SideNavService,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location,
    private messageService:MessageService,
    private logger: LogUtils,
    private cfr: ComponentFactoryResolver
    ) { }

  ngOnInit() {
    this.logger.debug("Setting the side nav element .....");
    this.sideNavService.setSideNav(this.sideNav);
    this.router.events.subscribe(val =>{
      if (this.isHomePage()){
        this.logger.debug("Contents:    Home Page");
        this.sideNavService.showNav(false);

      }else{
        this.logger.debug("Contents:    Other Page was selected ... " + this.location.path());
        this.sideNavService.showNav(true);
      }
        
     
    });
    
    
  }
  isHomePage(){
    return ((this.location.path().includes('mainContents:home'))  ||
    (this.location.path() =='/contents'));

  }
  ngAfterViewInit(){
  }

  public getActiveModuleName():string{
    return this.activeModule.name;
  }

  getModule(name:string):Module{
    return modules.filter(curModule=>curModule.name==name)[0];
  }



}
