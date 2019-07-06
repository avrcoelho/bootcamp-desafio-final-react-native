import { call, put, select } from 'redux-saga/effects';

import { api } from '~/services/api';
import OrdersActions from '~/stores/ducks/orders';
import CartActions from '~/stores/ducks/cart';

export function* getOrders() {
  try {
    const token = yield select(state => state.storage.dataget.token);
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = yield call(api.get, 'orders', headers);

    yield put(OrdersActions.getOrdersSuccess(data));
  } catch (err) {
    yield put(OrdersActions.getOrdersFailure('Erro ao ao obter os pedidos'));
  }
}

export function* setOrders({ order }) {
  try {
    const token = yield select(state => state.storage.dataget.token);
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    yield call(api.post, 'orders', order, headers);

    yield put(CartActions.clearCart());
    yield put(OrdersActions.setOrdersSuccess());
  } catch (err) {
    yield put(OrdersActions.setOrdersFailure('Erro ao ao realizar o pedido'));
  }
}
