import axios from 'axios'
axios.defaults.baseURL = 'https://dummyjson.com/users'

export const getUsers = async (skip, limit) => {
    const { data } = await axios(`?skip=${skip}&limit=${limit}`)
    return data
}
