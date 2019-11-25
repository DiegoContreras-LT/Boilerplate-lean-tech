import { call, takeEvery, put, all} from 'redux-saga/effects'
import { itemActionTypes } from '../actionTypes/item'
import { itemActions } from '../actions/item'
import API from '../../API'

function* saveItem(payload) {
  itemActions.saveItem()
  try {
    const response = yield call(API.itemService.saveItem, payload)
    yield put (itemActions.saveItemSuccess(response.data))
  } catch (error) {
    yield put (itemActions.saveItemError(error))
  }
}

function* saveInitItem() {
  yield takeEvery (itemActionTypes.SAVE_ITEM_LOADING, saveItem)
}
