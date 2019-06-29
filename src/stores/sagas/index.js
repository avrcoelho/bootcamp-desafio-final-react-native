import { all, takeLatest } from 'redux-saga/effects';

import { SignupTypes } from '~/stores/ducks/signup';
import { LoginTypes } from '~/stores//ducks/login';
import { ProductsTypes } from '~/stores//ducks/products';

import { signup } from './signup';
import { login } from './login';
import { products } from './products';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignupTypes.SET_SIGNUP_REQUEST, signup),
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, login),
    takeLatest(ProductsTypes.SET_PRODUCTS_REQUEST, products),
    takeLatest(ProductsTypes.SET_PRODUCTS_REFRESH, products),
  ]);
}
