export enum Type {
  Error = 'ERR', 
  Info = 'INFO', 
  Warning = 'WARN',
  Debug = 'DEBUG',
  Default = 'LOG'}

export class LogMessage {
  type: Type;
  text: string;
  date: Date;

  constructor(msgText: string, msgType: Type) {
    this.type = msgType;
    this.text = msgText;
    this.date = new Date();
  }
}
