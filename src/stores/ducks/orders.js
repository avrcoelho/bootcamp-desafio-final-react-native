import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  getOrdersRequest: null,
  getOrdersSuccess: ['data'],
  getOrdersFailure: ['error'],
  getOrdersRefresh: null,
  setOrdersRequest: ['order'],
  setOrdersSuccess: null,
  setOrdersFailure: ['error'],
});

export const OrdersTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  error: null,
  refreshing: false,
  setLoading: false,
  setSuccess: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ORDERS_REQUEST]: state => state.merge({ error: null, loading: true }),
  [Types.GET_ORDERS_SUCCESS]: (state, { data }) => state.merge({
    data,
    refreshing: false,
    loading: false,
  }),
  [Types.GET_ORDERS_FAILURE]: (state, { error }) => state.merge({
    error,
    refreshing: false,
    loading: false,
  }),
  [Types.GET_ORDERS_REFRESH]: state => state.merge({
    refreshing: true,
  }),
  [Types.SET_ORDERS_REQUEST]: state => state.merge({ error: null, setLoading: true }),
  [Types.SET_ORDERS_SUCCESS]: state => state.merge({
    setSuccess: true,
    loading: false,
  }),
  [Types.SET_ORDERS_FAILURE]: (state, { error }) => state.merge({
    error,
    setSuccess: false,
    setLoading: false,
  }),
});
