import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setSignupRequest: ['fullname', 'email', 'password'],
  setSignupSuccess: null,
  setSignupFailure: ['error'],
  setSignupClear: null,
});

export const SignupTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  success: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SIGNUP_REQUEST]: state => state.merge({ error: null, loading: true }),
  [Types.SET_SIGNUP_SUCCESS]: state => state.merge({
    success: true,
    loading: false,
  }),
  [Types.SET_SIGNUP_FAILURE]: (state, { error }) => state.merge({
    error,
    loading: false,
  }),
  [Types.SET_SIGNUP_CLEAR]: state => state.merge({
    error: null,
    loading: false,
    success: false,
  }),
});
