import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { LogMessage, Type } from './logMessage';

@Injectable({
  providedIn: 'root',
})

export class LogUtils{
  dateFormat:string = 'y-MM-dd_HH:mm:ss';
  constructor(private datePipe:DatePipe){

  }


  public createDate():string{
    return this.datePipe.transform(new Date(),this.dateFormat);
  }

  public log(text:string){
    console.log('%c[' + this.createDate() + '] : %c' + text,'color:blue;','color:black;');
  }
  public debug(text:string){
    console.debug('%c[' + this.createDate() + '] : %c' + text,'color:blue;','color:black;');
  }

  logMessage(msg:LogMessage){
    switch(msg.type){
          case Type.Info:
            console.info(this.composeLogMessage(msg),'color:blue;','color:' + this.getMsgLogColor(msg) + ';','color:blue;','color:black;');
            break;
          case Type.Error:
            console.error(this.composeLogMessage(msg),'color:blue;','color:' + this.getMsgLogColor(msg) + ';','color:blue;','color:black;');
            break;
          case Type.Warning:
            console.warn(this.composeLogMessage(msg),'color:blue;','color:' + this.getMsgLogColor(msg) + ';','color:blue;','color:black;');
            break;
          default:
            console.log(this.composeLogMessage(msg),'color:blue;','color:' + this.getMsgLogColor(msg) + ';','color:blue;','color:black;');
            break;
        }
  }
  getMsgLogColor(msg:LogMessage):string{
    switch(msg.type){
      case Type.Info:
        return 'green';
      case Type.Error:
        return 'red';
      case Type.Warning:
        return 'yellow';
      default:
        return 'black';
    }
}
  composeLogMessage(msg:LogMessage):any{
    return '%c[' + this.createDate() +'] %c' + msg.type + ' %c:: %c' + msg.text;
  }


}