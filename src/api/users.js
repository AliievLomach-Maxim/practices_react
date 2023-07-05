import { instance } from './api'

export const getUsers = async (page, limit) => {
    const { data } = await instance(`users?page=${page}&limit=${limit}`)
    return data
}

export const getUserDetails = async id => {
    const { data } = await instance(`users/${id}`)
    return data
}

export const updateUser = async (id, user) => {
    const { data } = await instance.put(`/users/${id}`, user)
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
