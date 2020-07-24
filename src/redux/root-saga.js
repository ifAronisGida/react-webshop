import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas.js';
import { userSagas } from './user/user.sagas.js';

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas)]);
}
