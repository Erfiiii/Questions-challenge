import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Card } from '../../components/card';
import { Header } from '../../components/header';
import { MessageIcon } from "../../assets/icons";
import { Link } from 'react-router-dom';
import { fetchQuestions, selectAllQuestions } from './questionsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SpinnerLoading } from '../../components/loading';
import { sortByDate } from '../../shared/utils';

interface OwnProps { };

type Props = PropsWithChildren<OwnProps>;

export default function QuestionsPage(props: Props) {
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const questions = useAppSelector(selectAllQuestions);
    const sortedQuestions = useMemo(() => sortByDate([...questions]), [questions])
    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            await dispatch(fetchQuestions())
            setLoading(false)
        }
        fetch()
    }, [dispatch])
    if (loading) return <SpinnerLoading />
    return (
        <>
            <Header title='لیست سوالات' />
            <div className='flex flex-col p-5 m-6 space-y-5 mt-14'>
                {sortedQuestions.map((question, index) => (
                    <Card
                        key={index}
                        title={question.title}
                        description={question.description}
                        dateTime={new Date(question.createdAt)}
                        actions={
                            <Link to={`/question/${question.id}`} className='text-emerald-500 text-sm border-2 px-4 py-1 rounded-md border-emerald-500 border-solid'
                            >مشاهده جزيیات</Link>
                        }
                        additionalInfo={
                            <div className="inline-flex">
                                <MessageIcon />
                                <span className="text-sm text-gray-500 mr-1">{question.commentsCount}</span>
                            </div>
                        }
                    />
                ))}
            </div>
        </>
    )
}