import { Auth } from '../../domain/auth';

import { ConfigState } from './reducers/config';

export interface StoreState {
  auth: Auth;
  config: ConfigState;
}
