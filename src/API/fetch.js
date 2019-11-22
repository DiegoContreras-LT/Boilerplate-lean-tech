import axios from 'axios'

export const FETCH = (method, endpoint, payload = {}, url = null) => {
  const URL = url || `${process.env.REACT_APP_BASE_URL}${endpoint}`;

  const instance = axios.create({
    headers: {
      'content-type': 'application/json'
    }
  });

  return new Promise(async (resolve, reject) => {
    const _method = method.toLocaleLowerCase() 
    if (instance[_method]) {
      try {
        const response = await instance[_method](URL, payload);
        return resolve(response);
      } catch (error) {
          return reject(error);
        }
    }
    return reject(new Error('Method not is valid'))
  });
};