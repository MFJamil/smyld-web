import {Keystore} from './keystore';
export class Adapter {

  errorText: string;
  name: string;
  status: string;
  type: string;
  isUpdated: boolean;
  keyStore: Keystore;
  trustStore: Keystore;
}
