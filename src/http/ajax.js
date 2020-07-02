import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3300',
  timeout: 10000,
  withCredentials: true,
})

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

http.interceptors.request.use(config => {

  return config
}, error => {
  return Promise.reject(error)
})


http.interceptors.response.use(res => {
  return res
}, error => {
  Promise.reject(error)
})

function ajax(url, payload = {}, method = 'GET') {
  if (method === 'GET') {
    return http.get(url, {
      params: payload
    })
  } else if (method === 'POST') {
    return http.post(url, payload)
  }
}


export default ajax