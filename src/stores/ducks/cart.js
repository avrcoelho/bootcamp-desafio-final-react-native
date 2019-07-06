import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  addItemCart: ['item'],
  removeItemCart: ['id'],
  clearCart: null,
});

export const CartTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM_CART]: (state, { item }) => state.merge({
    data: [...state.data, item],
  }),
  [Types.REMOVE_ITEM_CART]: (state, { id }) => state.merge({
    data: state.data.filter(item => item.id !== id),
  }),
  [Types.CLEAR_CART]: state => state.merge({
    data: [],
  }),
});
