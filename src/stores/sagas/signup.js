import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import SignupActions from '~/stores/ducks/signup';

export function* signup({ fullname, email, password }) {
  try {
    yield call(api.post, 'users', {
      fullname,
      email,
      password,
    });

    yield put(SignupActions.setSignupSuccess());
  } catch (err) {
    console.log(err);
    yield put(SignupActions.setSignupFailure('Erro ao realizar o cadastro'));
  }
}
