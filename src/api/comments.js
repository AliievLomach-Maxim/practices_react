import { instance } from './api'

export const getCommentsByPost = async id => {
    const { data } = await instance(`posts/${id}/comments`)
    return data
}

export const createComment = async (id, body) => {
    const { data } = await instance.post(`comments/add/${id}`, body)
    return data
}
