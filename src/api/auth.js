import { instance, setToken } from './api'

export const login = async body => {
    const { data } = await instance.post(`auth/login`, body)
    setToken(data.token)
    localStorage.setItem('token', data.token)
    return data
}

export const signup = async body => {
    const { data } = await instance.post(`auth/signup`, body)
    setToken(data.token)
    localStorage.setItem('token', data.token)
    return data
}

export const refresh = async token => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const { data } = await instance(`auth/refresh`)
    setToken(data.token)
    return data
}
