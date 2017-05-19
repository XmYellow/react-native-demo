/**
 * Combine All Reducers
 *
 */

import { combineReducers } from 'redux';

import router from '@redux/router/reducer';
import sideMenu from '@redux/sidemenu/reducer';
import user from '@redux/user/reducer';
import messages from '@redux/messages/reducer';

// Combine all
const appReducer = combineReducers({
  router,
  sideMenu,
  user,
  messages
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
