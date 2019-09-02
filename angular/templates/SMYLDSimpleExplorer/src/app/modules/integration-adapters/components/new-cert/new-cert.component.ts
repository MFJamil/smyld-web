import { Component, OnInit, ViewChild, OnChanges, AfterViewInit, ElementRef, HostListener, Directive, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DndDirective } from '../../../../utils/dnd/dnd.directive';
import { DndFilesListener } from 'src/app/utils/dnd/DndFilesListener';
import { Keystore } from '../../model/keystore';
import { environment } from '../../../../../environments/environment';
import { IntegrationChangesService } from '../../services/integration-changes.service';
import { Adapter } from '../../model/adapter';
import { AdapterService } from '../../services/adapter.service';
import { AddKeyRequest } from '../../model/addKeyRequest';
import { HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Cert } from '../../model/cert';
import { MessageService } from 'src/app/main/services/message.service';
import { LogUtils } from 'src/app/utils/LogUtils';




@Component({
  selector: 'app-new-cert',
  templateUrl: './new-cert.component.html',
  styleUrls: ['./new-cert.component.sass']
})
export class NewCertComponent implements OnInit, OnChanges, AfterViewInit, DndFilesListener {

  @ViewChild('fileElement', { static: false }) fileEl: ElementRef;
  @ViewChild('fileDD', { static: false }) fileDD: DndDirective;
  @Input() store: Keystore;
  @Input() adapter:Adapter;

  public certForm: FormGroup;
  selectedFile: File;

  constructor(
    private changeService:IntegrationChangesService,
    private adapterService:AdapterService,
    private logger: LogUtils,
    private messageService:MessageService) {
    this.certForm = new FormGroup({
      certAlias: new FormControl(),
      certFile: new FormControl()
    });

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.logger.debug("==================== Resetting the form now ===============================");

  }

  ngAfterViewInit() {
    this.logger.debug("==================== NewCertComponent: afterViewInit : Resetting the form now ===============================");
    this.fileDD.addFilesListener(this);
    //this.fileDD.setDragBackground("#efe");

  }

  resetForm() {
    this.logger.debug("Resetting the form now ..... ");
    this.certForm.reset();

  }

  handleDataChange() {
    this.logger.debug(this.fileEl.nativeElement.files.item(0).type);
    this.handleSelectedFiles(this.fileEl.nativeElement.files);

  }

  handleSelectedFiles(list: any): void {
    this.certForm.controls['certFile'].setValue(list.item(0).name);
    this.selectedFile = list.item(0);
  }

  saveNewCert() {
    let newAlias:string = this.certForm.controls['certAlias'].value;
    this.logger.debug("Should save the cert with file " + this.certForm.controls['certFile'].value + " holding alias " + newAlias);
    if (environment.dryRun){
      let newCert = {
        alias: this.certForm.controls['certAlias'].value,
        serialNumber: 'a8b55fe9b4a29f1c',
        creationDate: new Date('2018-12-10'),
        expiryDate: new Date('2019-12-10'),
        details: 'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
        status: '',
        message: ''
      };
      this.messageService.info('The new certifiate was added successfully ');
      this.store.keys.push(newCert);
    }else{
      let newRequest:AddKeyRequest = new AddKeyRequest(this.adapter,this.store,this.selectedFile,newAlias);
      this.adapterService.addNewCert(newRequest).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.logger.debug(event.loaded + ' from ' + event.total);
          // TODO we can update a progress bar in this case
        } else if (event instanceof HttpResponse) {
          const resp = <HttpResponse<string>>event;
          const newCerts: Cert[] = JSON.parse(resp.body); // Work around for a bug in Angular APIs (https://github.com/angular/angular/issues/19103)
          for (let item of newCerts ) {
            this.store.keys.push(item);
          }
          if (newCerts.length > 1 ) {
            this.messageService.info('Multiple certifiates were added successfully ');
          } else {
            this.messageService.info('The new certifiate was added successfully ');
          }
          this.fileEl.nativeElement.value = null;
        } else if (event instanceof HttpErrorResponse) {
          const errResp = <HttpErrorResponse>event;
          const errCert = JSON.parse(errResp.error); // Work around for a bug in Angular APIs (https://github.com/angular/angular/issues/19103)
          
          this.messageService.error('Adding certificate did not work ' + (errCert!=null?errCert.message:''));
          this.fileEl.nativeElement.value = null;
        }
      });
  
    }
    
    // Adding to pending svn changes
    let message = environment.svnJira + ': adding new cert with Alias \'' + this.certForm.controls['certAlias'].value + '\''; // Needs to read a default message from settings
    this.changeService.addChangeDetails(this.adapter,this.store,message);
    this.resetForm();
  }


}
