import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import StorageActions from '~/stores/ducks/storage';

export function* setStorage({ dataset }) {
  try {
    yield call(AsyncStorage.setItem, '@BootCamp:userdata', JSON.stringify(dataset));

    yield put(StorageActions.storageSuccess(dataset));
  } catch (err) {
    yield put(StorageActions.storageFailure('Erro ao fazer login'));
  }
}

export function* getStorage() {
  try {
    let data = yield call(AsyncStorage.getItem, '@BootCamp:userdata');

    if (data) {
      data = JSON.parse(data);
    }

    yield put(StorageActions.storageSuccess(data));
  } catch (err) {
    yield put(StorageActions.storageFailure('Erro ao fazer login'));
  }
}
