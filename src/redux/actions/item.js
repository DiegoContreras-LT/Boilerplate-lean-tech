import { itemActionTypes } from '../actionTypes/item'

export const addItem = () => ({
  type: itemActionTypes.ADD_ITEM_LOADING
})

export const addItemSuccess = payload => ({
  type: itemActionTypes.ADD_ITEM_SUCCESS,
  payload
})

export const addItemError = payload => ({
  type: itemActionTypes.ADD_ITEM_ERROR,
  payload
})

export const deleteItem = () => ({
  type: itemActionTypes.DELETE_ITEM_LOADING
})

export const deleteItemSuccess = payload => ({
  type: itemActionTypes.DELETE_ITEM_SUCCESS,
  payload
})

export const deleteItemError = payload => ({
  type: itemActionTypes.DELETE_ITEM_ERROR,
  payload
})

export const updateItem = () => ({
  type: itemActionTypes.UPDATE_ITEM_LOADING
})

export const updateItemSuccess = payload => ({
  type: itemActionTypes.UPDATE_ITEM_SUCCESS,
  payload
})

export const updateItemError = payload => ({
  type: itemActionTypes.UPDATE_ITEM_ERROR,
  payload
})

export const getItems = () => ({
  type: itemActionTypes.GET_ITEMS_LOADING
})

export const getItemsSuccess = payload => ({
  type: itemActionTypes.GET_ITEMS_SUCCESS,
  payload
})

export const getItemsError = payload => ({
  type: itemActionTypes.GET_ITEMS_ERROR,
  payload
})