import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import ProductsActions from '~/stores/ducks/products';

export function* products() {
  try {
    const { data } = yield call(api.get, 'products');

    yield put(ProductsActions.setProductsSuccess(data));
  } catch (err) {
    yield put(ProductsActions.setProductsFailure('Erro ao ao obter os productos'));
  }
}
