import { Injectable } from '@angular/core';
import { mockAdapters } from './mock-adapter-service';
import { Adapter } from '../model/adapter';
import {environment} from '../../../../environments/environment'
import { ReqAliasUpdate } from '../model/reqAliasUpdate';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { ReqCommitChange } from '../model/reqCommitChange';
import { ReqDeleteCert } from '../model/reqDeleteCert';
import { MessageService } from 'src/app/main/services/message.service';
import { AddKeyRequest } from '../model/addKeyRequest';
import { Platform } from 'src/app/main/services/platform.service';
import { ReqMultiChange } from '../model/reqMultiChange';
import { LogUtils } from 'src/app/utils/LogUtils';

@Injectable({
  providedIn: 'root'
})
export class AdapterService {
  private urlBase         = '/api/';
  private urlLoadAdapters = 'loadAdapters';
  private urlUpAlias      = 'updateAlias';
  private urlDelCert      = 'deleteCert';
  private urlCmtChang     = 'commitChange';
  private urlRevChang     = 'rollbackChange';
  private urlCmtMulti     = 'commitMultiChanges';
  private urlRevMulti     = 'rollbackMultiChanges';

  adapters:Adapter[];
  

  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private logger:LogUtils) { }

  getUrl(serviceUrl: string): string {
    return this.urlBase + serviceUrl;
  }

  public loadAdapters(platform:Platform):Observable<Adapter[]>{

    if (environment.dryRun)
      return of(mockAdapters);
    const params = '/?platform=' + platform;
    this.logger.debug('Request params : ' + params);
    return   this.http.get<Adapter[]>(this.getUrl(this.urlLoadAdapters) + params).pipe(
      tap(adapterList => {
        this.adapters = adapterList;
        this.logger.log('fetched ' + this.adapters.length + ' Adapters ....');
      
      }),
      catchError(err =>this.handleError('loadAdapters', err)));
    
  }


  public getAdapterByName(adName:string):Adapter{
    if (environment.dryRun){
      return (mockAdapters.filter(ad =>ad.name==adName))[0];
    }else{
      if (this.adapters!=undefined)
        return (this.adapters.filter(ad =>ad.name==adName))[0];
    }
      
  }

  
  updateCertAlias(request: ReqAliasUpdate): Observable<HttpErrorResponse | ReqAliasUpdate> {
    return this.http.post<ReqAliasUpdate>(this.getUrl(this.urlUpAlias), request)
      .pipe(
      tap(Tis => this.logger.debug('Update Alias worked ....!!!')),
      catchError(err => this.handleError<ReqAliasUpdate>('Delete Cert Failed',err))
      );
  }

  commitChange(request: ReqCommitChange): Observable<HttpErrorResponse | ReqCommitChange> {
    return this.http.post<ReqCommitChange>(this.getUrl(this.urlCmtChang), request)
      .pipe(
      tap(Tis => this.logger.debug('Change was committed successfully ....!!!')),
      catchError(err => this.handleError<ReqCommitChange>('Commit Change Failed',err))
      );
  }
  rollbackChange(request: ReqCommitChange): Observable<HttpErrorResponse | ReqCommitChange> {
    return this.http.post<ReqCommitChange>(this.getUrl(this.urlRevChang), request)
      .pipe(
      tap(Tis => this.logger.debug('Change was rolled back successfully ....!!!')),
      catchError(err => this.handleError<ReqCommitChange>('Roll Back Failed',err))
      );
  }

  commitMultiChanges(request: ReqMultiChange): Observable<HttpErrorResponse | ReqMultiChange> {
    return this.http.post<ReqMultiChange>(this.getUrl(this.urlCmtMulti), request)
      .pipe(
      tap(Tis => this.logger.debug('Multiple commits were done successfully ....!!!')),
      catchError(err => this.handleError<ReqMultiChange>('Multiple Commit Changes Failed',err))
      );
  }

  rollbackMultiChanges(request: ReqMultiChange): Observable<HttpErrorResponse | ReqMultiChange> {
    return this.http.post<ReqMultiChange>(this.getUrl(this.urlRevMulti), request)
      .pipe(
      tap(Tis => this.logger.debug('Multiple commits were done successfully ....!!!')),
      catchError(err => this.handleError<ReqMultiChange>('Multiple Commit Changes Failed',err))
      );
  }

  

  deleteCert(request: ReqDeleteCert): Observable<HttpErrorResponse | ReqDeleteCert> {

    return this.http.post<ReqDeleteCert>(this.getUrl(this.urlDelCert), request)
      .pipe(
      tap(Tis => {

        this.logger.debug('Delete Cert worked ....!!!');
      }),
      catchError(err => this.handleError<ReqDeleteCert>('Delete Cert Failed',err))
      );

  }

  addNewCert(request: AddKeyRequest): Observable<HttpErrorResponse | HttpEvent<{}>> {
    this.logger.debug( 'Is about sending the file via post method ' + request.keyFile.name);
    const formData: FormData = new FormData();
    formData.append('fileKey', request.keyFile, request.keyFile.name);
    formData.append('alias', request.alias);
    formData.append('store', request.store.name);
    formData.append('adapter', request.adapter.name);
    formData.append('type', request.adapter.type);
    

    const req = new HttpRequest('POST', '/api/newKey', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req).pipe(
      catchError(err => this.handleError<HttpErrorResponse>('Adding Cert Failed',err))
    );

  }




  private handleError<T>(operation = 'operation', error?: any) {
    this.messageService.error('Error while doing ' + operation + ' with error ' + error.message);
    return of(error); 
  }  
}
