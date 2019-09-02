import {Cert} from './cert';
import {Keystore} from './keystore';
import { Adapter } from './adapter';


export class ReqDeleteCert {
  targetCert: Cert;
  keyStore: Keystore;
  adapter: Adapter;
  message: string;
  constructor(adapter:Adapter,targetCert:Cert,keyStore:Keystore,message:string){
    this.adapter = adapter;
    this.keyStore = keyStore;
    this.targetCert = targetCert;
    this.message = message;
  }

}
