import { FETCH } from '../fetch'
import { itemRoutes } from '../routes/item'

export class Item {
  async add(payload) {
    try {
      const response = FETCH('post', itemRoutes.add, payload)
      //validate data before returning response
      return response
    } catch (error) {
      //Add log error before returning error
      return error;
    }
  }

  async get() {
   try {
     const response = FETCH('get', itemRoutes.get)
     //validate data before returning response
     return response
   } catch (error) {
      //Add log error before returning error
     return error
   } 
  }

  async find(payload) {
    try {
      const response = FETCH('get', itemRoutes.item, payload)
      //validate data before returning response
      return response
    } catch (error) {
      //Add log error before returning error
      return error
    } 
   }

   async delete(payload) {
    try {
      const response = FETCH('delete', itemRoutes.item, payload)
      //validate data before returning response
      return response
    } catch (error) {
      //Add log error before returning error
      return error
    } 
   }

   async update(payload) {
    try {
      const response = FETCH('put', itemRoutes.item, payload)
      //validate data before returning response
      return response
    } catch (error) {
      //Add log error before returning error
      return error
    } 
   }
}