import { Router,Route } from '@angular/router';
import { LogUtils } from './LogUtils';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class RoutingUtils{

  constructor(public logUtils:LogUtils){}


    public printRoutings(router:Router){
      this.logUtils.log(" *************   ROUTERS ******************");
        router.config.forEach(curConf=>{
          this.printRoute(curConf,"");
        });
        console.log(" *************   ROUTERS ******************");
    
    
      }
    public printRoute(route: Route,suffix: string){
        console.log(suffix + "Path        : " + route.path);
        console.log(suffix + "Path Match  : " + route.pathMatch);
        console.log(suffix + "Outlet      : " + route.outlet);
        console.log(suffix + "Redirect To : " + route.redirectTo);
        if (route.component)
          console.log(suffix + "Component   : " + route.component.name);
    
        console.log(suffix + "_____________________________");
        if (route.children){
          console.log(suffix + "Children : " + route.children.length);
          route.children.forEach(curConf => this.printRoute(curConf,suffix+"  "));
        }
      }
    
    


}