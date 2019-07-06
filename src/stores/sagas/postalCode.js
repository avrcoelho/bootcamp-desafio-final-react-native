import { call, put } from 'redux-saga/effects';

import { apiPostalCode } from '~/services/api';
import PostalCodeActions from '~/stores/ducks/postalCode';

export function* postalCode({ postaCode }) {
  try {
    const { data } = yield call(apiPostalCode.get, `${postaCode}/json/`);

    yield put(PostalCodeActions.postalCodeSuccess(data));
  } catch (err) {
    yield put(PostalCodeActions.postalCodeFailure('CEP não encontrado'));
  }
}
