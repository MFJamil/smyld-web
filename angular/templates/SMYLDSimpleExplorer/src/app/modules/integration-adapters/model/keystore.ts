
import {Cert} from './cert';
export class Keystore {
  side: string;
  name: string;
  pass: string;
  type: string;
  status: string;
  errorText: string;
  isUpdated: boolean;
  keys: Cert[];
}
