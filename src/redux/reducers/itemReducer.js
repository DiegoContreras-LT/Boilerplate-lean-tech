import { itemActionTypes } from '../actionTypes/item'

const initialState = {
  items: [],
  error: null,
  loading: false,
  success: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case itemActionTypes.SAVE_ITEM_LOADING:
    case itemActionTypes.DELETE_ITEM_LOADING:
    case itemActionTypes.UPDATE_ITEM_LOADING:
    case itemActionTypes.REQUEST_ITEMS_LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    case itemActionTypes.SAVE_ITEM_ERROR:
    case itemActionTypes.DELETE_ITEM_ERROR:
    case itemActionTypes.UPDATE_ITEM_ERROR:
    case itemActionTypes.REQUEST_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: !state.loading
      }
    case itemActionTypes.SAVE_ITEM_SUCCESS:
    case itemActionTypes.DELETE_ITEM_SUCCESS:
    case itemActionTypes.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        success: !state.success,
        loading: !state.loading
      }
    case itemActionTypes.REQUEST_ITEMS_SUCCESS:
      return {
        ...state,
        loading: !state.loading,
        items: [...action.payload]
      }
      default:
          return state;
  }
}