import {Keystore} from './keystore';
import { Adapter } from './adapter';

export class ReqCommitChange {
  store: Keystore;
  adapter: Adapter;
  svnMessage: string;
  status: string;
  constructor(adapter:Adapter,keyStore:Keystore,message:string){
    this.adapter = adapter;
    this.store = keyStore;
    this.svnMessage = message;
  }

  

}
