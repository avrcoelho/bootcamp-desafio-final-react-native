import { all, takeLatest } from 'redux-saga/effects';

import { SignupTypes } from '~/stores/ducks/signup';
import { LoginTypes } from '~/stores//ducks/login';
import { ProductsTypes } from '~/stores//ducks/products';
import { OrdersTypes } from '~/stores//ducks/orders';
import { StorageTypes } from '~/stores//ducks/storage';
import { PostalCodeTypes } from '~/stores//ducks/postalCode';

import { signup } from './signup';
import { login } from './login';
import { products } from './products';
import { getOrders, setOrders } from './orders';
import { setStorage, getStorage, clearStorage } from './storage';
import { postalCode } from './postalCode';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignupTypes.SET_SIGNUP_REQUEST, signup),
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, login),
    takeLatest(ProductsTypes.SET_PRODUCTS_REQUEST, products),
    takeLatest(ProductsTypes.SET_PRODUCTS_REFRESH, products),
    takeLatest(OrdersTypes.GET_ORDERS_REQUEST, getOrders),
    takeLatest(OrdersTypes.GET_ORDERS_REFRESH, getOrders),
    takeLatest(OrdersTypes.SET_ORDERS_REQUEST, setOrders),
    takeLatest(StorageTypes.SET_STORAGE_DATA, setStorage),
    takeLatest(StorageTypes.GET_STORAGE_DATA, getStorage),
    takeLatest(StorageTypes.SET_STORAGE_CLEAR, clearStorage),
    takeLatest(PostalCodeTypes.POSTAL_CODE_REQUEST, postalCode),
  ]);
}
