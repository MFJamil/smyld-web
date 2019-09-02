import {Injectable} from '@angular/core';
import {LogMessage, Type} from '../../utils/logMessage';
import { DatePipe } from '@angular/common';
import { LogUtils } from 'src/app/utils/LogUtils';

export interface LogMessageListener{
  messageAdded(logMessage:LogMessage):void;

}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  dateFormat:string = 'y-MM-dd_HH:mm:ss';
  messages: LogMessage[] = [];
  listeners:LogMessageListener[] = [];
  
  constructor(private datePipe:DatePipe,
    private logger:LogUtils) {}

  
  public addListener(newListener:LogMessageListener){
    this.listeners.push(newListener);
  }

  informListeners(message:LogMessage):void{
    this.listeners.forEach(lst => lst.messageAdded(message));
  }

  // Did not manage to pass the arguments in the call dynamically, hence the below lengthy iterated code lines !!
  addMessage(msg:LogMessage){
    this.messages.push(msg);
    this.logger.logMessage(msg);
    this.informListeners(msg);
  }

  info(text: string) {
    this.addMessage(new LogMessage(text, Type.Info));
  }
  error(text: string) {
    this.addMessage(new LogMessage(text, Type.Error));
  }

  warning(text: string) {
    this.addMessage(new LogMessage(text, Type.Warning));
  }

}
