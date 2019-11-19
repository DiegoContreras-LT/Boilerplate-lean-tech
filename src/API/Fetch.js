import axios from 'axios'

export const FETCH = (method, endpoint, payload = {}, url = null) => {
  const URL = url || `${process.env.REACT_APP_BASE_URL}${endpoint}`;

  const instance = axios.create({
    headers: {
      'content-type': 'application/json'
    }
  });

  return new Promise(async (resolve, reject) => {
    if (instance[method.toLocaleLowerCase()]) {
      try {
        const response = await instance[method](URL, payload);
        return resolve(response);
      } catch (error) {
          return reject(error);
        }
    }
    return reject(new Error('Method not is valid'))
  });
};