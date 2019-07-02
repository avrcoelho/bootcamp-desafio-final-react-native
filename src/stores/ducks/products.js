import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setProductsRequest: null,
  setProductsSuccess: ['data'],
  setProductsFailure: ['error'],
  setProductsRefresh: null,
  setSelectTypes: ['productId'],
  setSelectSizes: ['typeId'],
});

export const ProductsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  error: null,
  refreshing: false,
  types: null,
  sizes: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PRODUCTS_REQUEST]: state => state.merge({ error: null, loading: true }),
  [Types.SET_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({
    data,
    refreshing: false,
    loading: false,
  }),
  [Types.SET_PRODUCTS_FAILURE]: (state, { error }) => state.merge({
    error,
    refreshing: false,
    loading: false,
  }),
  [Types.SET_PRODUCTS_REFRESH]: state => state.merge({
    refreshing: true,
  }),
  [Types.SET_SELECT_TYPES]: (state, { productId }) => state.merge({
    types: state.data.docs.find(prod => prod.id === productId).types,
  }),
  [Types.SET_SELECT_SIZES]: (state, { typeId }) => state.merge({
    sizes: state.types.find(tp => tp.id === typeId).sizes,
  }),
});
