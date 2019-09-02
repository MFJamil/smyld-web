
import {ReqDeleteCert} from './reqDeleteCert';
import { Adapter } from './adapter';
import { Cert } from './cert';
import { Keystore } from './keystore';

export class ReqAliasUpdate extends ReqDeleteCert {
  newAlias: string;
  constructor(adapter:Adapter,targetCert:Cert,keyStore:Keystore,message:string,newAlias:string){
    super(adapter,targetCert,keyStore,message);
    this.newAlias = newAlias;
  }

}
