import { instance } from './api'

export const getUsers = async (page, limit) => {
    const { data } = await instance(`users?page=${page}&limit=${limit}`)
    return data
}

export const getUserDetails = async id => {
    const { data } = await instance(`users/${id}`)
    return data
}

export const createUser = async user => {
    const { data } = await instance.post('/add', user)
    return data
}

export const searchUser = async (query, page, limit) => {
    const { data } = await instance.get(
        `users?name=${query}&page=${page}&limit=${limit}`
    )
    return data
}

export const getPostsByUserId = async userId => {
    const { data } = await instance(`users/${userId}/posts`)
    return data
}

export const getTodosByUserId = async userId => {
    const { data } = await instance(`users${userId}/todos`)
    return data
}
