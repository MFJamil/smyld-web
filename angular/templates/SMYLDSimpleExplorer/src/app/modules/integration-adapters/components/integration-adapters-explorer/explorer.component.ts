import {Component, OnInit, AfterViewInit} from '@angular/core';
import { AdapterService } from '../../services/adapter.service';
import { Adapter } from '../../model/adapter';
import { IntegrationChangesService,AdapterChangeListener } from '../../services/integration-changes.service';
import { PlatformListener,Platform, PlatformService } from 'src/app/main/services/platform.service';
import { MessageService } from 'src/app/main/services/message.service';
import { HttpErrorResponse } from '@angular/common/http';


/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-integration-adapters-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.sass']
})
export class IntegrationAdaptersExplorerComponent implements OnInit,AdapterChangeListener,PlatformListener {

  public pendingChanges:boolean = false;
  public tis:Adapter[];
  public ifs:Adapter[];
  public ods:Adapter[];

  constructor(
    private adapterService:AdapterService,
    private changeService:IntegrationChangesService,
    private messageService:MessageService,
    private platformService:PlatformService
    ) {
  }

  ngOnInit(){
    this.changeService.addListener(this);
    this.platformService.addListener(this);
    this.pendingChanges = this.changeService.changes.length>0;
    this.loadAdapters();
  }

  loadAdapters(){
    this.adapterService.loadAdapters(this.platformService.platform).subscribe(adapters =>{
      if ((adapters!=undefined)&&(adapters.length!=undefined)){
        this.messageService.info('Adapters were successfully loaded with a size of ' + adapters.length + ' adapter');
        this.tis = adapters.filter(ad => ad.type=='ti');
        this.ifs = adapters.filter(ad => ad.type=='if');
        this.ods = adapters.filter(ad => ad.type=='od');
      }else{
        if (adapters instanceof HttpErrorResponse){
          this.messageService.error('Error by loading the adapters, we had received http error response: '+ (<HttpErrorResponse>adapters).error);
        }else{
          this.messageService.error('Error by loading the adapters, received uknown object');
        }  
      }
  
      
    });
    
    
  }


  getAdapterClass(item: Adapter): string {
    switch (item.status) {
      case 'ERROR_STORE_CORRUPTED': case 'EMPTY_SETUP':
        return 'adapter-link cfg_err';
      case 'ERROR_STORE_HAS_INVALID_CERT':
        return 'adapter-link inv_cert';
    }
    return 'adapter-link';
  }

  listChanged(): void {
    this.pendingChanges = this.changeService.changes.length>0;
  }

  platformChanged(newPlatform: Platform): void {
    this.loadAdapters();    
  }


}

