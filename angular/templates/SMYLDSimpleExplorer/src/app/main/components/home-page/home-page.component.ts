import { Component, OnInit } from '@angular/core';
import {modules, Module} from '../../model/Module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  
  constructor() {

   }

  moduleList():Module[]{
    return modules.filter(curModule => curModule.name!='home');

  }

   /*  Looping over enum
   services():any[]{
    return Object.keys(Services).filter(
       (type)=>isNaN(<any>type) && type !== 'values'
    );

   }*/

  ngOnInit() {
  }
  getRouterLink(path:string):string{
    return "['/contents',{outlets:{mainContents:['" + path + "']}}]";

  }

}
