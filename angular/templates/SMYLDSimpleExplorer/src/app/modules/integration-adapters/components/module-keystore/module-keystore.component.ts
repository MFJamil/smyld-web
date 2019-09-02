import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Adapter } from '../../model/adapter';
import { Keystore } from '../../model/keystore';

@Component({
  selector: 'app-module-keystore',
  templateUrl: './module-keystore.component.html',
  styleUrls: ['./module-keystore.component.sass']
})
export class ModuleKeystoreComponent implements OnInit,OnChanges {
  @Input() adapter:Adapter;
  showPage:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.showPage = this.adapter.status != 'EMPTY_SETUP';
  }

  getTabClass(store: Keystore):string{
    if (store.status=='ERROR_INVALID_CERT')
      return 'inv_cert';
    return 'key-tab';
  }

  
}
