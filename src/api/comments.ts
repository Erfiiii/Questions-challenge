import axios from 'axios';
import { Comment } from './types';

export const getCommentsByQuestionId = async (questionId: string)=> {
    try {
        const res = await axios.get<Comment[]>(`http://localhost:3004/comments?questionId=${questionId}`)
        return res.data  
    } catch (error) {
        throw error
    }
}


export const createComment = async (data: {questionId: string,title: string})=> {
    const newComment : Comment = {
        id: Math.floor(Math. random() * 1000).toString(),
        createdAt: (new Date()).toDateString(),
        likes: 0,
        dislikes: 0,
        title: data.title,
        questionId: data.questionId,
        creator: {
            avatar: 'test',
            id: '1',
            userName: 'test'
        }
    }
    try {
        return await axios.post('http://localhost:3004/comments', newComment)
        
    } catch (error) {
        throw error
    }
}

export const updateComment = async (id:string, data: Partial<Comment>)=> {
    try {
        const headers = {"Content-Type": "application/json"}
        return axios.patch(`http://localhost:3004/comments/${id}`,data ,{headers})
    } catch (error) {
        throw error
    }

}