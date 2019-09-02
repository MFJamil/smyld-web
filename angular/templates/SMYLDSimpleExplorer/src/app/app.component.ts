  import { Component, AfterViewInit,ViewChild, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatSidenav } from '@angular/material';
import { Router,Route } from '@angular/router';
import { modules } from './main/model/Module';
import { ModuleName } from './main/services.enum';
import { environment } from 'src/environments/environment';
import { MessageService } from './main/services/message.service';
import { Type } from './utils/logMessage';
import { LogUtils } from './utils/LogUtils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit,OnInit {

  @ViewChild('sidenav',{static:false}) sidenav:MatSidenav;
  reason = '';

  title = 'SMYLD Simple Explorer';
  serverMessage = 'No message was received from the server';
  selectedValue: string="";
  items = [
    {value:"0",view:"Zero"},
    {value:"1",view:"One"},
    {value:"2",view:"Two"}
  ];
  constructor(
      private http:HttpClient,
      private messageService:MessageService,
      private logger: LogUtils,
      private router: Router){

      }
  
  ngAfterViewInit() {
  }


  populateModuleRoutes(route: Route){
    modules.filter(mod => mod.name!=ModuleName.Home).forEach(curModule =>{
      const mainRoute = {
        path: curModule.path,
        component: <any>curModule.mainComponent,
        outlet: 'mainContents',
        pathMatch: 'full'
      };
      const sideRoute = {
        path: curModule.path,
        component: <any>curModule.sideComponent,
        outlet: 'sideContents',
        pathMatch: 'full'
      };

      route.children.push(mainRoute);
      route.children.push(sideRoute);
    
    });

  }

  ngOnInit(){
    this.printEnvironment();
  }

  printEnvironment(){
    
    this.logger.log(" ==================  Environment ===================");
    console.log("Application Title    : " + environment.appTitle );
    console.log("Dry Run              : " + environment.dryRun );
    console.log("Production           : " + environment.production );
    console.log(" ====================================================");
    

  }


  close(reason:string){
    this.reason = reason;
    this.sidenav.close();

  }

  
}
