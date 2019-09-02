import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module2-explorer',
  templateUrl: './module2-explorer.component.html',
  styleUrls: ['./module2-explorer.component.sass']
})
export class Module2ExplorerComponent implements OnInit {
  public tasks:any[]=[
    {
      title: 'Group1',
      list:['Item 1']
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
