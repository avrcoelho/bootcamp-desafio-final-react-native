import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setStorageData: ['dataset'],
  getStorageData: null,
  storageSuccess: ['dataget'],
  storageFailure: ['error'],
  setStorageClear: null,
});

export const StorageTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: null,
  dataget: null,
  success: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STORAGE_SUCCESS]: (state, { dataget }) => state.merge({
    success: true,
    dataget,
  }),
  [Types.STORAGE_FAILURE]: (state, { error }) => state.merge({
    error,
    success: false,
  }),
});
