import { combineReducers } from 'redux';

import { reducer as signup } from './signup';
import { reducer as login } from './login';
import { reducer as products } from './products';
import { reducer as storage } from './storage';
import { reducer as orders } from './orders';
import { reducer as cart } from './cart';

export default combineReducers({
  signup,
  login,
  products,
  storage,
  orders,
  cart,
});
