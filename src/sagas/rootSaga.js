import { takeLatest } from 'redux-saga/effects';
import { CHANGE_TEXT } from '../actions';
import handleSearch from './handleSearch';

export default function* rootSaga() {
  yield takeLatest(CHANGE_TEXT, handleSearch);
}
