import { SET_APP_CONFIG } from '../actions/config';

import { List } from '../../../constant/type';

export interface ConfigState {
  partner_id: List;
  tracking_status: List;
}

const defaultState: ConfigState = {
  partner_id: [],
  tracking_status: [],
};

const configReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_APP_CONFIG:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default configReducer;
