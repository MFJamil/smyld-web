import { Adapter } from './adapter';
import { Keystore } from './keystore';

export enum ChangeType{
    add,delete,update
  
  };

export class AdapterChange{
    adapter: Adapter;
    file: Keystore;
    message: string;

}