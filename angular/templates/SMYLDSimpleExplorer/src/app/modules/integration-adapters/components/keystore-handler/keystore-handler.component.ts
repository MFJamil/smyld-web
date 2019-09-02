import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import {Keystore} from '../../model/keystore';
import { NewCertComponent } from '../new-cert/new-cert.component';
import { Adapter } from '../../model/adapter';
import { LogUtils } from 'src/app/utils/LogUtils';

@Component({
  selector: 'app-keystore-handler',
  templateUrl: './keystore-handler.component.html',
  styleUrls: ['./keystore-handler.component.sass']
})
export class KeystoreHandlerComponent implements OnInit, AfterViewInit,OnChanges {
  @ViewChild('certAlias',{static:false}) alias: ElementRef;
  @ViewChild('newCertPanel',{static:false}) newCertPanel:NewCertComponent;
  @Input() store: Keystore;
  @Input() adapter: Adapter;
  doShowNewCert: boolean;
  showCerts:boolean = true;
  public icon='add_circle_outline';
  constructor(
    private logger: LogUtils
  ) { }

  ngOnInit() {
    this.logger.debug(" =========================================== KeystoreHandlerComponent :: ngOnInit========================================");
    this.doShowNewCert = false;
  }

  ngAfterViewInit(): void {
    this.logger.debug(" =========================================== KeystoreHandlerComponent :: ngAfterViewInit========================================");
    this.doShowNewCert = false;
  }


  ngOnChanges(){
    this.logger.debug(" =========================================== KeystoreHandlerComponent :: ngOnChange========================================");
    if (this.newCertPanel!=undefined)
      this.newCertPanel.resetForm();
    this.doShowNewCert = false;
    this.icon='add_circle_outline';
    this.showCerts = this.store && this.store.status!= 'ERROR_INVALID_SETTINGS';
    this.logger.debug("Show certs value " + this.showCerts);

  }
  editCertAlias(){
    this.logger.debug("Edit Cert alias ..... ");
    this.alias.nativeElement.setAttribute('contenteditable','true' );
    this.alias.nativeElement.focus();
    //this.alias.nativeElement.select();
    
  }

  aliasKeyPressed(event: KeyboardEvent) {
      

  }

  getStoreNameClass():string{
    if (this.store.status=='ERROR_INVALID_CERT')
      return 'store-name inv_cert';
    return 'store-name'

  }
  

  showNewCert(){
    this.doShowNewCert = !this.doShowNewCert;
    this.icon = this.doShowNewCert?'remove_circle_outline':'add_circle_outline';
  }

}
