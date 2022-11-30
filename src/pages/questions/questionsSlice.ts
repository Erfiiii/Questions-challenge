import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createQuestion, getQuestion, getQuestions, Question, updateQuestion as updateQuestionByApi } from '../../api'
import { RootState } from '../../redux/store'

export type QuestionsState = {
    questions: Question[],
    question: Question | null,
    error: string | null
}

const initialState: QuestionsState = {
    questions: [],
    question: null,
    error: null
}

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
    const response = await getQuestions()
    return response
})

export const fetchQuestion = createAsyncThunk('questions/fetchQuestion', async (id: string) => {
    const response = await getQuestion(id)
    return response
})

export const addNewQuestion = createAsyncThunk(
    'questions/addNewQuestion',
    async (data: {
        title: string,
        description: string
    }) => {
        const response = await createQuestion(data)
        return response
    }
)

export const updateQuestion = createAsyncThunk('questions/updateQuestion', async (value: {
    id: string,
    data: Partial<Question>
}) => {
    const response = await updateQuestionByApi(value.id, value.data)
    return response
})

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.questions = action.payload
            })
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                state.question = action.payload
            })
            .addCase(addNewQuestion.fulfilled, (state, action) => {
                state.questions.push(action.payload)
            })
            .addCase(updateQuestion.fulfilled, (state, action) => {
                state.question = action.payload
            })
    },

})

export default questionsSlice.reducer

export const selectAllQuestions = (state: RootState) => state.questions.questions;

