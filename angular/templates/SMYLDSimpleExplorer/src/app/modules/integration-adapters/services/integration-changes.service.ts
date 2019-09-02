import { Injectable } from '@angular/core';
import { AdapterChange } from '../model/adapter-change';
import { Adapter } from '../model/adapter';
import { Keystore } from '../model/keystore';
import { MessageService } from 'src/app/main/services/message.service';
import { LogUtils } from 'src/app/utils/LogUtils';

export interface AdapterChangeListener{
  listChanged():void;

}

@Injectable({
  providedIn: 'root'
})
export class IntegrationChangesService {
  public IntegrationChangesKey:string = 'Integration_Pending_changes';
  changes:AdapterChange[]= [];
  changeListeners:AdapterChangeListener[]=[];
  constructor(
    private messageService:MessageService,
    private logger:LogUtils
    ) { 

    this.init();
  }
  
  init(){
    let localStorage = window.localStorage;
    let savedChanges = localStorage.getItem(this.IntegrationChangesKey);
    if (savedChanges!=undefined){
      this.logger.log("Found pending changes : " +  savedChanges);
      this.changes = JSON.parse(savedChanges);
    }
  }

  public addChangeDetails(adapter:Adapter,store:Keystore,message:string){
    let newChange = new AdapterChange();
    newChange.file = store;
    newChange.adapter = adapter;
    newChange.message = message; 
    this.addChange(newChange);

  }
  public addChange(adapterChange: AdapterChange){
    let updatedChange:boolean = false;
    this.changes.forEach(curChng =>{
      if ((curChng.adapter.name==adapterChange.adapter.name)&&
          (curChng.file.name==adapterChange.file.name)){
        curChng.message = curChng.message + "," + adapterChange.message;    
        updatedChange = true;
      }
    });
    if (!updatedChange)
      this.changes.push(adapterChange);
    this.saveChanges();
    this.informChangeListeners();
  }


  informChangeListeners(){
    this.changeListeners.forEach(lsnr => lsnr.listChanged());
  }

  public removeChangeByIndex(index: number){
    this.changes.splice(index,1);
    this.saveChanges(); 
    this.informChangeListeners();
    
  }  

  // Below Code should be reviewed 
  public removeChange(adapterChange: AdapterChange){
    this.changes = this.changes.filter(chg =>{
      chg!=adapterChange
    });
    this.saveChanges();
    this.informChangeListeners();

  }
  saveChanges(){
    let localStorage = window.localStorage;
    this.logger.debug('Saving changes to local storage ....');
    localStorage.setItem(this.IntegrationChangesKey, JSON.stringify(this.changes));
  }

  clearAll(){
    this.changes.splice(0,this.changes.length);
    this.saveChanges();
    this.informChangeListeners();  
  }

  public addListener(newListener:AdapterChangeListener){
    this.changeListeners.push(newListener);
  }

}
