import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigations-explorer',
  templateUrl: './investigations-explorer.component.html',
  styleUrls: ['./investigations-explorer.component.sass']
})
export class InvestigationsExplorerComponent implements OnInit {
  public tasks:any[]=[
    {
      title: 'Pricing Servers',
      list:['Time Out','Pricing problem','Connection']
    },
    {
      title: 'Runtime Clients',
      list:['Connection','Certificate']
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
