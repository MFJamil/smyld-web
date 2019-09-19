import { NgModule } from '@angular/core';
import { Routes, Router,Route } from '@angular/router';
import { RoutingUtils } from 'src/app/utils/RoutingUtils';
import { Module1ContainerComponent } from './components/container/module1-container.component';


// Below Routers are injected "dynamically" as children under "contents" path
const moduleRoutes: Routes = [
  {
    path:'item/:name', 
    component: Module1ContainerComponent,
    outlet: 'mainContents',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    
  ],
  exports: [],
  declarations: []
})
export class Module1Routings { 
  constructor(private router:Router,
    private routingUtils:RoutingUtils){
    this.router.config.forEach(curConf=>{
      if (curConf.path=='contents')
        this.populateModuleRoutes(curConf);
    });
    this.routingUtils.printRoutings(router);
  }

  populateModuleRoutes(route: Route){
    moduleRoutes.forEach(curRoute=>{
      route.children.push(curRoute);

    });
  }

}
