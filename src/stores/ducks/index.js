import { combineReducers } from 'redux';

import { reducer as signup } from './signup';
import { reducer as login } from './login';
import { reducer as products } from './products';

export default combineReducers({
  signup,
  login,
  products,
});
