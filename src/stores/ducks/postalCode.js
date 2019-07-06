import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  postalCodeRequest: ['postaCode'],
  postalCodeSuccess: ['data'],
  postalCodeFailure: ['error'],
});

export const PostalCodeTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: {},
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POSTAL_CODE_REQUEST]: state => state.merge({
    error: null,
  }),
  [Types.POSTAL_CODE_SUCCESS]: (state, { data }) => state.merge({
    data,
  }),
  [Types.POSTAL_CODE_FAILURE]: (state, { error }) => state.merge({
    error,
  }),
});
