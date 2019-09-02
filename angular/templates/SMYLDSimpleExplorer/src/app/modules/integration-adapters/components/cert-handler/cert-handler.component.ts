import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cert } from '../../model/cert';
import { Keystore } from '../../model/keystore';
import { AdapterUtils } from '../../utils/adapterUtils';
import { Adapter } from '../../model/adapter';
import { IntegrationChangesService } from '../../services/integration-changes.service';
import { AdapterService } from '../../services/adapter.service';
import { environment} from '../../../../../environments/environment';
import { ReqDeleteCert } from '../../model/reqDeleteCert';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'src/app/main/services/message.service';
import { ReqAliasUpdate } from '../../model/reqAliasUpdate';
import { LogUtils } from 'src/app/utils/LogUtils';

enum Mode {
  idle =1 ,
  aliasEdit = 2,
  certDelete = 3
  
}

@Component({
  selector: 'app-cert-handler',
  templateUrl: './cert-handler.component.html',
  styleUrls: ['./cert-handler.component.sass']
})
export class CertHandlerComponent implements OnInit,AfterViewInit {
  @Input() cert: Cert;
  @Input() store: Keystore;
  @Input() adapter:Adapter;
  
  mode: Mode;
  adapterUtils:AdapterUtils;
  
  
  @ViewChild('certAlias',{static:false}) alias: ElementRef;
  @ViewChild('certIcon',{static:false}) certIcon: ElementRef;
  @ViewChild('editIcon',{static:false}) editIcon: ElementRef;
 
  expireWarnDuration: number;
  dayInMilis: number;
  isAboutToExpire: boolean;
  inEditMode: boolean;
  showCert: boolean;

 
  constructor(
    private changeService:IntegrationChangesService,
    private adaptersService:AdapterService,
    private logger: LogUtils,
    private messageService:MessageService) { }

  ngOnInit() {
    this.mode = Mode.idle;
    this.adapterUtils = new AdapterUtils();
    this.expireWarnDuration = environment.certExpireWarnDuration;
    this.dayInMilis = 24 * 60 * 60000;
 
    
  }
  ngAfterViewInit(): void {
    this.certIcon.nativeElement.src = '/assets/' + this.getCertIcon();
  }


  getCertIcon():string{
      this.isAboutToExpire = false;
      const curDate = new Date();
      const expDate = new Date(this.cert.expiryDate);
      let diff = 0;
      diff = Math.round((+expDate - +curDate) / this.dayInMilis);
      this.logger.debug("Expiry date for the cert is : "  + this.cert.expiryDate + " the difference is " + diff);
      if (diff < 0) {
        return 'cert_red_16.png';
      } else if (diff < this.expireWarnDuration) {
        this.isAboutToExpire = true;
        return 'cert_orange_16.png';
      }
      return 'cert_green_16.png';

  }

  editCertAlias(){
    this.logger.debug("Edit Cert alias ..... ");
    this.processUserActions();

  }

  processUserActions(){
    switch(this.mode){
      case Mode.idle:
        this.alias.nativeElement.setAttribute('contenteditable','true' );
        this.editIcon.nativeElement.setAttribute('src','assets/save.png');
        this.alias.nativeElement.focus();
        this.mode = Mode.aliasEdit;
        break;
      case Mode.aliasEdit:
        let newCertAlias = this.alias.nativeElement.innerHTML;
        let changeMessage = environment.svnJira + ': renaming cert with Alias \'' + this.cert.alias + '\' to \'' + newCertAlias + '\'';
   
        if (environment.dryRun){
          this.processSuccessfullRename(changeMessage,newCertAlias);
        }else{
          let reqAliasUpdate = new ReqAliasUpdate(this.adapter,this.cert,this.store,changeMessage,newCertAlias);
          this.adaptersService.updateCertAlias(reqAliasUpdate).subscribe(resp => {
            if (resp === undefined) {
              this.messageService.error('Received null response! something was wrong');
              this.alias.nativeElement.innerHTML = this.cert.alias;
            } else if (resp.constructor.name === 'HttpErrorResponse') {
              const errText = (<HttpErrorResponse>resp).error.message;
              this.messageService.error('Failed to rename the alias ' + this.cert.alias + ' with the new value ' + this.alias.nativeElement.textContent + ' due to the following error ' + errText);
            } else {
              // Everything is ok
              this.processSuccessfullRename(changeMessage,newCertAlias);
            }
        });
      }
      // GUI Updates
      this.editIcon.nativeElement.setAttribute('src','assets/edit.png');
      this.alias.nativeElement.setAttribute('contenteditable','false' );
      this.alias.nativeElement.blur();
      this.mode = Mode.idle;
    }
  }

  processSuccessfullRename(changeMessage:string,newCertAlias:string){
    this.messageService.info('Successfully renamed the alias ' + this.cert.alias + ' with the new value ' + this.alias.nativeElement.textContent);
    this.changeService.addChangeDetails(this.adapter,this.store,changeMessage);
    this.cert.alias = newCertAlias;


  }


  aliasKeyPressed(event: KeyboardEvent) {
    this.logger.debug("Cert Key was pressed ...." + event.key);
    if (event.key=='Enter'){
      this.processUserActions();
      event.stopPropagation();

    }
  }

  deleteCert(){
    let delCert = this.cert.alias;
    let changeMessage = environment.svnJira + ': deleting cert with Alias \'' + delCert + '\'';
    this.changeService.addChangeDetails(this.adapter,this.store,changeMessage); // Adding to pending svn changes

    if (!environment.dryRun){
      this.logger.debug('Delete Cert is selected .... ');
      let req:ReqDeleteCert = new ReqDeleteCert(this.adapter,this.cert,this.store,changeMessage);
      this.adaptersService.deleteCert(req).subscribe(resp => {
        if (resp === undefined) {
          this.messageService.error('Received null response! something was wrong');
        } else if (resp.constructor.name === 'HttpErrorResponse') {
          const errResp = <HttpErrorResponse>resp;
          this.messageService.error('Failed to remove the cert ' + this.cert.alias + ' from the store ' + this.store.name + ' due to the error : ' + errResp.error.message);

        } else {
          // Everything is ok
          this.adapterUtils.removeStoreCert(this.store,this.cert);
          this.messageService.info('Successfully removed the cert \'' + this.cert.alias + '\' from the store \'' + this.store.name + '\'');
        }
      });
    }else{
      this.adapterUtils.removeStoreCert(this.store,this.cert);
      this.messageService.info('Successfully removed the cert \'' + this.cert.alias + '\' from the store \'' + this.store.name + '\'');

    }


  }


}