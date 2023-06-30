import axios from 'axios'
axios.defaults.baseURL = 'https://practices-api.vercel.app/users'

export const getUsers = async (page, limit) => {
    const { data } = await axios(`?page=${page}&limit=${limit}`)
    return data
}

export const getUserDetails = async id => {
    const { data } = await axios(`/${id}`)
    return data
}

export const createUser = async user => {
    const { data } = await axios.post('/add', user)
    return data
}

export const searchUser = async (query, skip, limit) => {
    const { data } = await axios.get(
        `/search?q=${query}&skip=${skip}&limit=${limit}`
    )
    return data
}

export const getPostsByUserId = async userId => {
    const { data } = await axios(`${userId}/posts`)
    return data
}

export const getTodosByUserId = async userId => {
    const { data } = await axios(`${userId}/todos`)
    return data
}
