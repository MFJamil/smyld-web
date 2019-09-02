import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { IntegrationChangesService } from '../../services/integration-changes.service';
import { AdapterChange } from '../../model/adapter-change';
import { environment } from 'src/environments/environment';
import { MessageService } from 'src/app/main/services/message.service';
import { AdapterService } from '../../services/adapter.service';
import { ReqCommitChange } from '../../model/reqCommitChange';
import { HttpErrorResponse } from '@angular/common/http';
import { ReqMultiChange } from '../../model/reqMultiChange';
import { Observable } from 'rxjs';
import { LogUtils } from 'src/app/utils/LogUtils';

@Component({
  selector: 'app-changes-container',
  templateUrl: './changes-container.component.html',
  styleUrls: ['./changes-container.component.sass']
})
export class ChangesContainerComponent implements OnInit {
  public changes:AdapterChange[];
  constructor(
    private adapterChanges:IntegrationChangesService,
    private messageService:MessageService,
    private adapterService:AdapterService,
    private logger: LogUtils,
    public dialog:MatDialog ) { }

  ngOnInit() {
    this.changes = this.adapterChanges.changes;
  }
  
  deleteChange(index: number){
    this.adapterChanges.removeChangeByIndex(index);  
  }

  rollbackChange(index: number){
    let targetChange: AdapterChange =  this.changes[index];
    if (environment.dryRun){
      this.adapterChanges.removeChangeByIndex(index);  
    }else{
      let reqChange :ReqCommitChange = new ReqCommitChange(targetChange.adapter,targetChange.file,targetChange.message);
      this.handleSingleChange(this.adapterService.rollbackChange(new ReqCommitChange(targetChange.adapter,targetChange.file,targetChange.message)),'rollback',index);
    }
  }
  
  commitChange(index: number){
    let targetChange: AdapterChange =  this.changes[index];
    if (environment.dryRun){
      this.adapterChanges.removeChangeByIndex(index);  
      this.messageService.info('The change with the message : \'' + this.changes[index].message + '\' was committed successfully');
    }else{
      this.handleSingleChange(this.adapterService.commitChange(new ReqCommitChange(targetChange.adapter,targetChange.file,targetChange.message)),'commit',index);
    }
    
  }

  handleSingleChange(response: Observable<HttpErrorResponse | ReqCommitChange>,op:string,index:number){
    let targetChange: AdapterChange =  this.changes[index];
    response.subscribe(resp => {
      if (resp === undefined) {
        this.messageService.error('Received null response! something was wrong');
      } else if (resp.constructor.name === 'HttpErrorResponse') {
        const errText = (<HttpErrorResponse>resp).error.message;
        this.messageService.error('Failed to ' + op + ' the change due to the following error ' + errText);
      } else {
        // Everything is ok
        this.adapterChanges.removeChangeByIndex(index);  
        this.messageService.info('The change with the message : \'' + targetChange.message + '\' was ' + op + ' successfully');
      }
    });


  }


  rollbackAll(){
    if (environment.dryRun){
      this.adapterChanges.clearAll();
    }else{
      let req:ReqMultiChange= this.createMultiRequest();
      this.handleMutliReq(this.adapterService.rollbackMultiChanges(req),'rollback');
      
    }
  }

  removeAdapterChange(adapterName:string,fileName:string){
    this.adapterChanges.changes.forEach(curChng =>{
      if ((curChng.adapter.name == adapterName)&&(curChng.file.name==fileName)){
        this.removeAdapterChangeByObject(curChng);
        
      }
    });
  }

  removeAdapterChangeByObject(delChange:AdapterChange){
    let index = this.adapterChanges.changes.indexOf(delChange);
    if (index!==-1){
      this.adapterChanges.changes.splice(index,1);
      this.adapterChanges.saveChanges();
    }

  }

  deleteAll(){
    this.adapterChanges.clearAll();

  }

  createMultiRequest():ReqMultiChange{
    let req:ReqMultiChange= new ReqMultiChange();
    req.changes = [];
    this.changes.forEach(curChng=>{
      req.changes.push(new ReqCommitChange(curChng.adapter,curChng.file,curChng.message));  
    });
    return req;

  }

  commitAll(){
    if (environment.dryRun){
      this.adapterChanges.clearAll();
    }else{
      let req:ReqMultiChange= this.createMultiRequest();
      this.handleMutliReq(this.adapterService.commitMultiChanges(req),'commit');
    }
  }

  handleMutliReq(response: Observable<HttpErrorResponse | ReqMultiChange>,op:string){
    response.subscribe(resp => {
      if (resp === undefined) {
        this.messageService.error('Received null response! something was wrong');
      } else if (resp.constructor.name === 'HttpErrorResponse') {
        let errResp:HttpErrorResponse = <HttpErrorResponse>resp;
        this.messageService.error('Failed to ' + op + ' all changes due to the following error ' + (<ReqMultiChange>errResp.error).status);
      } else {
        // Everything is ok
        let result = <ReqMultiChange>resp;
        result.changes.forEach(curChng =>{
          if (curChng.status==undefined){
            this.removeAdapterChange(curChng.adapter.name,curChng.store.name); 
            this.messageService.info('Successfully ' + op + ' the change on \'' + curChng.adapter.name + '\' adapter and \'' + curChng.store.name + '\' ');
          }else{
            this.messageService.error(op + ' the change on \'' + curChng.adapter.name + '\' adapter and \'' + curChng.store.name + '\' failed : ' + curChng.status);
          }
        });
      }
    });    
    
  }
  

  editMessage(change: AdapterChange){
    const dialogRef = this.dialog.open(SingleInputDialog, {
      width: '550px',
      height: '90px',
      data:change.message});
      dialogRef.afterClosed().subscribe(result =>{
        this.logger.debug('Dialog was closed with the result : ' + result);
        if (result){
          change.message = result;
          this.adapterChanges.saveChanges();
        }
        
      });


  }




}

@Component({
    selector: 'singleInputDialog',
    template: '<div>\
                <input type="text" size="50" value="{{default}}" #inputFld>\
                <button mat-icon-button (click)="sendChanges()"><mat-icon>done</mat-icon></button>\
                <button mat-icon-button (click)="doCancel()"><mat-icon>clear</mat-icon></button>\
                </div>'

})
export class SingleInputDialog {
  public default:string;
  @ViewChild('inputFld',{static:false}) fld:ElementRef;
  constructor(
    public dialogRef:MatDialogRef<SingleInputDialog>,
    @Inject(MAT_DIALOG_DATA) public defaultValue:string){
    this.default = defaultValue;
  }
  sendChanges(){
    this.dialogRef.close(this.fld.nativeElement.value);

  }
  doCancel(){
    this.dialogRef.close();
  }
  ngOnInit(){
  }
}
