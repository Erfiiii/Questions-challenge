import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Comment } from '../../api';
import { SadIcon, SmileIcon } from '../../assets/icons';
import { Card } from '../../components/card';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchComments, selectAllComments, updateComment } from './commentsSlice';
import { SpinnerLoading } from '../../components/loading';
import { sortByDate } from '../../shared/utils';

interface OwnProps {
    questionId: string
};

type Props = PropsWithChildren<OwnProps>;

export default function Comments(props: Props) {

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const comments = useAppSelector(selectAllComments);
    const sortedQuestions = useMemo(() => sortByDate([...comments]), [comments])

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true)
                await dispatch(fetchComments(props.questionId))
                setLoading(false)
            } catch (error) {
                setError('Somethin went wrong. try again')
            }
        }
        fetch()
    }, [dispatch, props.questionId])

    // Add loading 
    const onLikeComment = async (comment: Comment) => {
        await dispatch(updateComment({
            id: comment.id,
            data: { likes: comment.likes + 1 }
        }))
    }

    // Add loading 
    const onDislikeComment = async (comment: Comment) => {
        await dispatch(updateComment({
            id: comment.id,
            data: { dislikes: comment.dislikes + 1 }
        }))
    }


    if (error) return <span>{error}</span>;

    return loading ? <SpinnerLoading /> : (
        <>
            <p className='text-lg'>پاسخ ها</p>
            {sortedQuestions.map(comment => (
                <Card
                    key={comment.id}
                    title={comment.creator.userName}
                    description={comment.title}
                    dateTime={new Date(comment.createdAt)}
                    actions={
                        <div>
                            <button
                                className='inline-flex items-center ml-1 text-emerald-500 text-sm border-2 px-4 py-1  rounded-md border-gray-300 border-solid'
                                onClick={() => onLikeComment(comment)}
                            ><SmileIcon className="ml-1" />پاسخ خوب بود</button>
                            <button onClick={() => onDislikeComment(comment)} className='inline-flex items-center mr-1 text-red-500 text-sm border-2 px-4 py-1 rounded-md border-gray-300 border-solid'
                            ><SadIcon className="ml-1" />پاسخ خوب نبود</button>
                        </div>}
                    additionalInfo={<div className="inline-flex mr-3">
                        <div className="inline-flex items-center ml-1">
                            <SmileIcon />
                            <span className="text-sm text-gray-500 mr-2">{comment.likes}</span>
                        </div>
                        <div className="inline-flex items-center mr-2">
                            <SadIcon />
                            <span className="text-sm text-gray-500 mr-1">{comment.dislikes}</span>
                        </div>
                    </div>}
                />
            ))}

        </>
    )
}