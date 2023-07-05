import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://practices-api.vercel.app/',
})

export const setToken = token => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const delToken = () => {
    delete instance.defaults.headers.common['Authorization']
}
