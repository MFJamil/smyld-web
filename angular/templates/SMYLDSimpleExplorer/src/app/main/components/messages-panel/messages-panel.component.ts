import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MessageService, LogMessageListener } from '../../services/message.service';
import { LogMessage,Type } from '../../../utils/logMessage';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.sass']
})
export class MessagesPanelComponent implements OnInit,AfterViewInit,LogMessageListener {
  
  @ViewChild('msgPanel',{static:false}) panelEl:ElementRef;
  @ViewChild('pinEl',{static:false}) pinEl:ElementRef;
  panelVisible:boolean = false;
  messages:LogMessage[];
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.refreshMessages();
    this.messageService.addListener(this);
    
  }

  ngAfterViewInit(): void {
  }

  messageAdded(logMessage: LogMessage): void {
    this.refreshMessages();
  }

  getMsgLogIcon(msg:LogMessage):string{
    let iconFile = '/assets/images/'; 
    switch(msg.type){
      case Type.Info:
        iconFile +='info_g_16.png';
        break;
      case Type.Error:
        iconFile += 'error_r_16.png';
        break;
      case Type.Warning:
        iconFile +='warning.png';
        break;
      default:
        iconFile +='cert_green_16.png';
    }
    return iconFile;
}



  refreshMessages(){
    this.messages = this.messageService.messages;
  }

  public showMessagesPanel():void{
    this.panelEl.nativeElement.style.bottom = this.panelVisible?'-250px':'60px';
    this.panelEl.nativeElement.style.opacity = this.panelVisible?'0.2':'1';
    this.pinEl.nativeElement.src = '/assets/' + (this.panelVisible?'top.png':'down.png');
    this.panelVisible =!this.panelVisible;
  }

}
