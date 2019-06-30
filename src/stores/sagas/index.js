import { all, takeLatest } from 'redux-saga/effects';

import { SignupTypes } from '~/stores/ducks/signup';
import { LoginTypes } from '~/stores//ducks/login';
import { ProductsTypes } from '~/stores//ducks/products';
import { OrdersTypes } from '~/stores//ducks/orders';
import { StorageTypes } from '~/stores//ducks/storage';

import { signup } from './signup';
import { login } from './login';
import { products } from './products';
import { orders } from './orders';
import { setStorage, getStorage } from './storage';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignupTypes.SET_SIGNUP_REQUEST, signup),
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, login),
    takeLatest(ProductsTypes.SET_PRODUCTS_REQUEST, products),
    takeLatest(ProductsTypes.SET_PRODUCTS_REFRESH, products),
    takeLatest(OrdersTypes.SET_ORDERS_REQUEST, orders),
    takeLatest(OrdersTypes.SET_ORDERS_REFRESH, orders),
    takeLatest(StorageTypes.SET_STORAGE_DATA, setStorage),
    takeLatest(StorageTypes.GET_STORAGE_DATA, getStorage),
  ]);
}
