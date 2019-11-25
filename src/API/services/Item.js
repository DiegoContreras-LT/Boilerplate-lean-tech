import { FETCH } from '../fetch'
import { itemRoutes } from '../routes/item'

export class Item {
  async saveItem(payload) {
    try {
      const response = FETCH('post', itemRoutes.saveItem, payload)
      //validate data before returning response
      return response
    } catch (error) {
      return error;
    }
  }

  async getItems() {
   try {
     const response = FETCH('get', itemRoutes.getItems)
     //validate data before returning response
     return response
   } catch (error) {
     return error
   } 
  }

  async getItem(payload) {
    try {
      const response = FETCH('get', itemRoutes.getItem, payload)
      //validate data before returning response
      return response
    } catch (error) {
        //validate error log
      return error
    } 
   }

   async deleteItem(payload) {
    try {
      const response = FETCH('delete', itemRoutes.deleteItem, payload)
      //validate data before returning response
      return response
    } catch (error) {
      return error
    } 
   }

   async updateItem(payload) {
    try {
      const response = FETCH('put', itemRoutes.updateItem, payload)
      //validate data before returning response
      return response
    } catch (error) {
      return error
    } 
   }
}
