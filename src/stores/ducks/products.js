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
  setSelectSize: ['sizeId'],
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
  productId: null,
  sizeId: null,
  typeId: null,
  nameProd: null,
  sizeProd: null,
  priceProd: null,
  imageProd: null,
  typeProd: null,
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
  [Types.SET_SELECT_TYPES]: (state, { productId }) => {
    const product = state.data.docs.find(prod => prod.id === productId);

    return state.merge({
      nameProd: product.name,
      types: product.types,
      productId,
    });
  },
  [Types.SET_SELECT_SIZES]: (state, { typeId }) => {
    const types = state.types.find(tp => tp.id === typeId);

    return state.merge({
      sizes: types.sizes,
      typeProd: types.type,
      imageProd: types.url,
      typeId,
    });
  },
  [Types.SET_SELECT_SIZE]: (state, { sizeId }) => {
    const size = state.sizes.find(sz => sz.id === sizeId);

    return state.merge({
      priceProd: size.price,
      sizeProd: size.size,
      sizeId,
    });
  },
});
