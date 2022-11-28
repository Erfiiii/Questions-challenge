import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuestionPageLoader } from './pages/question';
import { QuestionsPageLoader } from './pages/questions';

interface OwnProps { };

type Props = PropsWithChildren<OwnProps>;

export function AppRouter(props: Props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<QuestionsPageLoader />} />
                <Route path='/question/:id' element={<QuestionPageLoader/>}/>
            </Routes>
        </BrowserRouter>
    )
}