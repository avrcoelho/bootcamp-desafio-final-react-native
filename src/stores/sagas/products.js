import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';
import ProductsActions from '~/stores/ducks/products';

export function* products() {
  try {
    const token = yield select(state => state.storage.dataget.token);
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = yield call(api.get, 'products', headers);

    yield put(ProductsActions.setProductsSuccess(data));
  } catch (err) {
    yield put(ProductsActions.setProductsFailure('Erro ao ao obter os productos'));
  }
}
