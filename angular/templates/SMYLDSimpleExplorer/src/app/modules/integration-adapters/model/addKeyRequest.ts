import {Keystore} from './keystore';
import { Adapter } from './adapter';

export class AddKeyRequest {
  keyFile: File;
  alias: string;
  store: Keystore;
  adapter: Adapter;
  constructor(adapter:Adapter,keyStore:Keystore,keyFile:File,alias:string){
    this.adapter = adapter;
    this.store = keyStore;
    this.keyFile = keyFile;
    this.alias = alias;
  }


}
