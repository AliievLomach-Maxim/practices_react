import axios from 'axios'
// axios.defaults.baseURL = 'https://practices-api.vercel.app/users'

export const instance = axios.create({
    baseURL: 'https://practices-api.vercel.app/',
})

export const setToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const delToken = () => {
    delete axios.defaults.headers.common['Authorization']
}
