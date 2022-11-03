import axios from "axios";

export const callAPI = (method, url, body = {}) =>
  new Promise((resolve, reject) => {
    axios({
      method,
      url,
    })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
  });
