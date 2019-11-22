import { itemActionTypes } from '../actionTypes/item'

 const saveItem = () => ({
  type: itemActionTypes.SAVE_ITEM_LOADING
})

 const saveItemSuccess = payload => ({
  type: itemActionTypes.SAVE_ITEM_SUCCESS,
  payload
})

 const saveItemError = payload => ({
  type: itemActionTypes.SHOW_ITEM_ERROR,
  payload
})

 const deleteItem = () => ({
  type: itemActionTypes.DELETE_ITEM_LOADING
})

 const deleteItemSuccess = payload => ({
  type: itemActionTypes.DELETE_ITEM_SUCCESS,
  payload
})

 const deleteItemError = payload => ({
  type: itemActionTypes.DELETE_ITEM_ERROR,
  payload
})

 const updateItem = () => ({
  type: itemActionTypes.UPDATE_ITEM_LOADING
})

 const updateItemSuccess = payload => ({
  type: itemActionTypes.UPDATE_ITEM_SUCCESS,
  payload
})

 const updateItemError = payload => ({
  type: itemActionTypes.UPDATE_ITEM_ERROR,
  payload
})

 const requestItems = () => ({
  type: itemActionTypes.REQUEST_ITEMS_LOADING
})

 const requestItemsSuccess = payload => ({
  type: itemActionTypes.REQUEST_ITEMS_SUCCESS,
  payload
})

 const requestItemsError = payload => ({
  type: itemActionTypes.REQUEST_ITEMS_ERROR,
  payload
})

export const itemActions = {
  saveItem, 
  saveItemError,
  saveItemSuccess,
  deleteItem,
  deleteItemError,
  deleteItemSuccess,
  updateItem,
  updateItemError,
  updateItemSuccess,
  requestItems,
  requestItemsError,
  requestItemsSuccess
} 