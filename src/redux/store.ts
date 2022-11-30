

import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../pages/questions/questionsSlice';
import commentsReducer from '../pages/question/commentsSlice';

const store = configureStore({
    reducer: {
        questions: questionsReducer,
        comments: commentsReducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;