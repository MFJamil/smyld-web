import { NgModule } from '@angular/core';
import { Routes, Router,Route } from '@angular/router';
import { AdapterContainerComponent } from './components/adapter-container/adapter-container.component';
import { RoutingUtils } from 'src/app/utils/RoutingUtils';
import { ChangesContainerComponent } from './components/changes-container/changes-container.component';


// Below Routers are injected "dynamically" as children under "contents" path
const integrationRoutes: Routes = [
  // Route for any clicked adapter 
  {
    path:'adapter/:name', 
    component: AdapterContainerComponent,
    outlet: 'mainContents',
    pathMatch: 'full'
  },
  {
    path:'adapterChanges', 
    component: ChangesContainerComponent,
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
export class IntegrationRountingModule { 
  constructor(private router:Router,
    private routingUtils:RoutingUtils){
    this.router.config.forEach(curConf=>{
      if (curConf.path=='contents')
        this.populateModuleRoutes(curConf);
    });
    this.routingUtils.printRoutings(router);
  }

  populateModuleRoutes(route: Route){
    integrationRoutes.forEach(curRoute=>{
      route.children.push(curRoute);

    });
  }

}
