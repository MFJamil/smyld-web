  import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router,Route } from '@angular/router';
import { ContentsComponent } from './components/contents/contents.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { modules } from '../main/model/Module';
import { RoutingUtils } from '../utils/RoutingUtils';



const routes: Routes = [
  {
    path:'contents',
    component: ContentsComponent,
    children:[
      { 
        path: 'home', 
        component: HomePageComponent,
        outlet: 'mainContents',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContentsRoutingModule { 

  constructor(private router:Router){
    this.router.config.forEach(curConf=>{
      if (curConf.path=='contents')
        this.populateModuleRoutes(curConf);
    });
  }

  populateModuleRoutes(route: Route){
    modules.filter(mod => mod.name!='home').forEach(curModule =>{
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

}
