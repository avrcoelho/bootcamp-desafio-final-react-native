import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setLoginRequest: ['email', 'password'],
  setLoginSuccess: ['data'],
  setLoginFailure: ['error'],
  setClearData: null,
});

export const LoginTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
  error: null,
  success: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOGIN_REQUEST]: state => state.merge({ error: null, loading: true }),
  [Types.SET_LOGIN_SUCCESS]: (state, { data }) => state.merge({
    data,
    success: true,
    loading: false,
  }),
  [Types.SET_LOGIN_FAILURE]: (state, { error }) => state.merge({
    error,
    success: false,
    loading: false,
  }),
  [Types.SET_CLEAR_DATA]: state => state.merge({
    data: {},
    loading: false,
    error: null,
    success: false,
  }),
});
