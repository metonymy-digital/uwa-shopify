import { combineReducers } from 'redux';

const FETCH_STATE_REQUEST = 'FETCH_STATE_REQUEST';
const FETCH_STATE_SUCCESS = 'FETCH_STATE_SUCCESS';
const FETCH_STATE_FAILURE = 'FETCH_STATE_FAILURE';
const FETCH_DATE_REQUEST = 'FETCH_DATE_REQUEST';
const FETCH_DATE_SUCCESS = 'FETCH_DATE_SUCCESS';
const FETCH_DATE_FAILURE = 'FETCH_DATE_FAILURE';
const FETCH_TOTAL_REQUEST = 'FETCH_TOTAL_REQUEST';
const FETCH_TOTAL_SUCCESS = 'FETCH_TOTAL_SUCCESS';
const FETCH_TOTAL_FAILURE = 'FETCH_TOTAL_FAILURE';
const FETCH_LOG_REQUEST = 'FETCH_LOG_REQUEST';
const FETCH_LOG_SUCCESS = 'FETCH_LOG_SUCCESS';
const FETCH_LOG_FAILURE = 'FETCH_LOG_FAILURE';
const FETCH_SHOP_REQUEST = 'FETCH_SHOP_REQUEST';
const FETCH_SHOP_SUCCESS = 'FETCH_SHOP_SUCCESS';
const FETCH_SHOP_FAILURE = 'FETCH_SHOP_FAILURE';
const FETCH_STATE_COMPLIANCE_REQUEST = 'FETCH_STATE_COMPLIANCE_REQUEST';
const FETCH_STATE_COMPLIANCE_SUCCESS = 'FETCH_STATE_COMPLIANCE_SUCCESS';
const FETCH_STATE_COMPLIANCE_FAILURE = 'FETCH_STATE_COMPLIANCE_FAILURE';

const initialState = {
  isLoading: false,
  err: false
};

const stateHandlers = {
  [FETCH_STATE_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  [FETCH_STATE_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      data: action.response.data
    });
  },
  [FETCH_STATE_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      err: action.error
    });
  }
};

const state = (state = initialState, action) => {
  if (stateHandlers[action.type]) {
    return stateHandlers[action.type](state, action);
  }
  return state;
};

const dateHandlers = {
  [FETCH_DATE_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  [FETCH_DATE_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      data: action.response.data
    });
  },
  [FETCH_DATE_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      err: action.error
    });
  }
};

const date = (state = initialState, action) => {
  if (dateHandlers[action.type]) {
    return dateHandlers[action.type](state, action);
  }
  return state;
};

const totalHandlers = {
  [FETCH_TOTAL_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  [FETCH_TOTAL_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      data: action.response.data
    });
  },
  [FETCH_TOTAL_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      err: action.error
    });
  }
};

const total = (state = initialState, action) => {
  if (totalHandlers[action.type]) {
    return totalHandlers[action.type](state, action);
  }
  return state;
};

const logHandlers = {
  [FETCH_LOG_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  [FETCH_LOG_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      data: action.response.data
    });
  },
  [FETCH_LOG_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      err: action.error
    });
  }
};

const log = (state = initialState, action) => {
  if (logHandlers[action.type]) {
    return logHandlers[action.type](state, action);
  }
  return state;
};

const shopHandlers = {
  [FETCH_SHOP_REQUEST]: (state, actions) => {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  [FETCH_SHOP_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      data: action.response.data
    });
  },
  [FETCH_SHOP_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      err: action.error
    });
  }
};

const shop = (state = initialState, action) => {
  if (shopHandlers[action.type]) {
    return shopHandlers[action.type](state, action);
  }
  return state;
};

const stateComplianceHandlers = {
  [FETCH_STATE_COMPLIANCE_REQUEST]: (state, actions) => {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  [FETCH_STATE_COMPLIANCE_SUCCESS]: (state, action) => {
    console.log('ACTION', action);
    return Object.assign({}, state, {
      isLoading: false,
      data: action.response.data
    });
  },
  [FETCH_STATE_COMPLIANCE_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      err: action.error
    });
  }
};

const stateCompliance = (state = initialState, action) => {
  if (stateComplianceHandlers[action.type]) {
    return stateComplianceHandlers[action.type](state, action);
  }
  return state;
};

export { state, date, total, log, shop, stateCompliance };
