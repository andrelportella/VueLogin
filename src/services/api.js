import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(endpoint) {
    return instance.get(endpoint);
  },
  post(endpoint, body) {
    return instance.post(endpoint, body);
  },

  login(body) {
    let queryString = "";
    let i = 1;
    for (let key in body) {
        
      if (i === 1) {
        queryString += `?${key}=${body[key]}`;
      } else {
        queryString += `&${key}=${body[key]}`;
      }
      i++
    }
   // console.log(queryString);

    const url = `http://localhost:3000/usuario?${queryString}`;
    return axios.get(url);
  },
  verificaLogin(token) {
  
    const url = `http://localhost:3000/usuario?token=${token}`;
    return axios.get(url);
  },
};
