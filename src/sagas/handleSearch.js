import { call, put } from 'redux-saga/effects';
import { setSuggestions } from '../actions';
import fakeRequest from '../fakeRequest';

export default function* handleSearch(action) {
  console.log(`Searching  ${action.payload}`);

  if (!action.payload) {
    yield put(setSuggestions([]));
    return;
  }

  const suggestions = yield call(
    fakeRequest,
    `/search/suggestions?${action.payload}`,
  );

  console.log(`Got Result ${action.payload}`);
  yield put(setSuggestions(suggestions));
}
