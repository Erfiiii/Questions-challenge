import axios from 'axios';
import { Question } from './types';

export const getQuestions = async ()=> {
    try {
        const res = await axios.get<Question[]>('http://localhost:3004/questions')
        return res.data
    } catch (error) {
        throw error
    }
  
}

export const getQuestion = async (id: string)=> {
    try {
        const res = await axios.get<Question>(`http://localhost:3004/questions/${id}`)
        return res.data
    } catch (error) {
        throw error
    }

}

export const createQuestion = async (data:{title: string, description: string}) => {
    try {
        const newQuestion : Question = {
            title: data.title,
            description: data.description,
            commentsCount: 0,
            id: Math.floor(Math. random() * 1000).toString(),
            createdAt: (new Date()).toDateString(),
            creator: {
                avatar: 'test',
                id: '1',
                userName: 'test'
            }
    
        } 
        await axios.post('http://localhost:3004/questions', newQuestion)
    } catch (error) {
        throw error
    }

}