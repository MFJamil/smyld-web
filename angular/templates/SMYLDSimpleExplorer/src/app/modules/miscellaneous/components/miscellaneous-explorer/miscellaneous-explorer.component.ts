import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscellaneous-explorer',
  templateUrl: './miscellaneous-explorer.component.html',
  styleUrls: ['./miscellaneous-explorer.component.sass']
})
export class MiscellaneousExplorerComponent implements OnInit {
  public tasks:any[]=[
    {
      title: 'JMX Tasks',
      list:['MMFund Upload']
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
