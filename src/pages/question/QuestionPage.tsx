import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MessageIcon } from '../../assets/icons';
import { Card } from '../../components/card';
import { Header } from '../../components/header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchQuestion } from '../questions/questionsSlice';
import { SpinnerLoading } from '../../components/loading';
import Comments from './Comments';
import { CreateComment } from './CreateComment';

interface OwnProps { };

type Props = PropsWithChildren<OwnProps>;

export default function QuestionPage(props: Props) {
    const { id = '' } = useParams()

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const question = useAppSelector(state => state.questions.question)
    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true)
                await dispatch(fetchQuestion(id))
                setLoading(false)
            } catch (error) {
                setError('Somethin went wrong. try again')
            }
        }
        fetch()
    }, [dispatch, id])

    if (error) return <span>{error}</span>

    if (!question) return null
    
    return (
        <>
            <Header title='جزییات سوال' />
            <div className='flex flex-col p-5 m-6 mt-14 h-full'>
                <div className='space-y-5'>
                    {loading ? <SpinnerLoading /> : (
                        <Card
                            title={question.title}
                            description={question.description}
                            dateTime={new Date(question.createdAt)}

                            additionalInfo={
                                <div className="inline-flex">
                                    <MessageIcon />
                                    <span className="text-sm text-gray-500 mr-1">{question.commentsCount}</span>
                                </div>
                            }
                        />
                    )}
                    <Comments questionId={id} />
                </div>
                <CreateComment questionId={id} />
            </div>
        </>
    )
}