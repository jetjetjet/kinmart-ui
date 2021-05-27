
import axios from 'axios'
import router from '../router'
import store from '../store'
import config from './config'

// import { mapGetters } from "vuex";

axios.defaults.withCredentials = true
const CancelToken = axios.CancelToken
export let cancel
// axios.defaults.baseURL = 'http://localhost/tesmart/';

const instance = axios.create({
  baseURL: config.api_endpoint,
  timeout: 20000,
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
});

instance.interceptors.request.use((config) => {
  const token = store.getters.StateToken
  config.headers.authorization = `Bearer ${token}`;
  config.headers.accept = 'application/json'
  config.headers['Content-Type'] = 'application/json'

  return config;
});

instance.interceptors.response.use((response) => {
  return response;
}, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
  // if (401 === error.response.status) {
  //   logoutUserService()
  //     .then((data) => {
  //       this.alertError(data)
  //       removeToken()
  //       window.localStorage.clear()
  //       window.location = '/'
  //     })
  //     .catch((e) => {
  //       removeToken()
  //       window.localStorage.clear()
  //       window.location = '/'
  //     });
  // } else {
  //   return Promise.reject(error);
  // }
});

// axios.interceptors.response.use(undefined, function(error) {
//   console.log('err', error)
//   if (error) {
//     const originalRequest = error.config;
//     console.log('refresh', error.response.status, originalRequest._retry)
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       store.dispatch("LogOut");
//       return router.push("/login");
//     }
//   }
// });

export default instance