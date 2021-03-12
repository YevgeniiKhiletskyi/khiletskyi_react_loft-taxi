import {logIn} from './actions';
import {serverLogin} from './api';
import {AUNTHENTICATE} from './actions';

export const authMiddleware = (store) => (next) => async (action) => {
  if(action.type === AUNTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogin(email, password)
    if(success) {
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
}