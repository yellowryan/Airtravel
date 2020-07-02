import ajax from './ajax'

//用户注册请求
export const userRegister = (userInfo) => ajax('register', userInfo, 'POST')

//用户登录请求
export const userLogin = (userInfo) => ajax('login', userInfo, 'POST')

