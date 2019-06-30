import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';
import OrdersActions from '~/stores/ducks/orders';

export function* orders() {
  try {
    const token = yield select(state => state.storage.dataget.token);
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = yield call(api.get, 'orders', headers);

    yield put(OrdersActions.setOrdersSuccess(data));
  } catch (err) {
    yield put(OrdersActions.setOrdersFailure('Erro ao ao obter os pedidos'));
  }
}
