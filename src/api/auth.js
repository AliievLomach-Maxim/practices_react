import { instance, setToken } from './api'

export const login = async body => {
    const { data } = await instance.post(`auth/login`, body)
    return data
}

export const signup = async body => {
    const { data } = await instance.post(`auth/signup`, body)
    setToken(data.token)
    return data
}
