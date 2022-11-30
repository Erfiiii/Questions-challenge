import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Comment, createComment, getCommentsByQuestionId, updateComment as updateCommentByApi } from '../../api'
import { RootState } from '../../redux/store'

export type CommentsState = { 
    comments: Comment[], 
    error: string | null 
}

const initialState: CommentsState = { comments: [], error: null }

export const fetchComments = createAsyncThunk('comments/fetchQuestions', async (questionId: string) => {
    const response = await getCommentsByQuestionId(questionId)
    return response
})

export const addNewComment = createAsyncThunk(
    'comments/addNewComment',
    async (data: {
        questionId: string,
        title: string
    }) => {
        const response = await createComment(data)
        return response
    }
)

export const updateComment = createAsyncThunk('comments/updateComment',async(value: {
    id: string,
    data: Partial<Comment>
})=> {
    const response = await updateCommentByApi(value.id, value.data)
    return response
})

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
        })
        .addCase(addNewComment.fulfilled, (state, action) => {
            state.comments.push(action.payload)
        })
        .addCase(updateComment.fulfilled, (state, action) => {
            state.comments.map((comment,index)=> {
                if(comment.id === action.payload.id) {
                    state.comments[index] = action.payload
                    return state.comments[index]
                }
                return comment
            })
        })
    },
})

export default commentsSlice.reducer

export const selectAllComments = (state: RootState) => state.comments.comments