import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export default {
  getPosts() {
    return api
      .get('/users/yyx990803/starred')
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err));
  },
};
