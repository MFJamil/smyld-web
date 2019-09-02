import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1-explorer',
  templateUrl: './module1-explorer.component.html',
  styleUrls: ['./module1-explorer.component.sass']
})
export class Module1ExplorerComponent implements OnInit {
  public tasks:any[]=[
    {
      title: 'Group1',
      list:['Item 1','Item 2','Item3']
    },
    {
      title: 'Group2',
      list:['Item1','Item2']
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
