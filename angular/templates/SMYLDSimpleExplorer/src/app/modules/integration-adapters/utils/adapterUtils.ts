import { Keystore } from '../model/keystore';
import { Cert } from '../model/cert';


export class AdapterUtils{

    public removeStoreCert(store:Keystore,cert:Cert):boolean{
        store.keys = store.keys.filter(curCert => curCert!= cert);
        //TODO need to check how to detect the successful filtering 
        return true;
    }


}