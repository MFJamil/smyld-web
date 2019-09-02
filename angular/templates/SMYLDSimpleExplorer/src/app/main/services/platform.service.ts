import {Injectable} from '@angular/core';

export enum Platform{
    Prod='Prod',
    Int='Int',
    NA='Unknown'

}

export interface PlatformListener{
    platformChanged(newPlatform:Platform):void;
}

@Injectable({
  providedIn: 'root'
})


export class PlatformService {
  constructor() {}
  listeners:PlatformListener[]=[];
  platform:Platform = Platform.Prod;
  public addListener(platformListener:PlatformListener):void{
    this.listeners.push(platformListener);
  }

  public doChangePlatform(newPlatform:Platform){
    this.platform = newPlatform;
    this.listeners.forEach(curListener => curListener.platformChanged(newPlatform));
  }

  public parsePlatform(platformText:string):Platform{
    switch(platformText.toLowerCase()){
        case 'prod':
            return Platform.Prod;
        case 'int':
            return Platform.Int;
        default:
            return Platform.NA;
    }  
  }

}
