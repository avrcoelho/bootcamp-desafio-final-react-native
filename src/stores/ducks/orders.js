import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setOrdersRequest: null,
  setOrdersSuccess: ['data'],
  setOrdersFailure: ['error'],
  setOrdersRefresh: null,
});

export const OrdersTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  error: null,
  refreshing: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ORDERS_REQUEST]: state => state.merge({ error: null, loading: true }),
  [Types.SET_ORDERS_SUCCESS]: (state, { data }) => state.merge({
    data,
    refreshing: false,
    loading: false,
  }),
  [Types.SET_ORDERS_FAILURE]: (state, { error }) => state.merge({
    error,
    refreshing: false,
    loading: false,
  }),
  [Types.SET_ORDERS_REFRESH]: state => state.merge({
    refreshing: true,
  }),
});
