import React, { PropsWithChildren, useState } from 'react';
import { useAppDispatch, useAppSelector,  } from '../../redux/hooks';
import { addNewComment,} from './commentsSlice';
import { SpinnerLoading } from '../../components/loading';
import { updateQuestion } from '../questions/questionsSlice';

interface OwnProps {
    questionId: string
};

type Props = PropsWithChildren<OwnProps>;

export function CreateComment(props: Props) {
    const [newComment, setNewComment] = useState<string>('');
    const question = useAppSelector(state=>state.questions.question)
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)


    const onChangeNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value)
    }

    const onSubmitNewComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            setLoading(true)
            e.preventDefault();
            await dispatch(addNewComment({
                questionId: props.questionId ?? '',
                title: newComment
            }))
            await dispatch(updateQuestion({
                id: props.questionId,
                data: {
                    commentsCount: (question?.commentsCount ?? 0) + 1 
                }
            }))
            setNewComment('')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError('Something went wrong. try again.')
        }


    }
    return loading ? <SpinnerLoading/> : (
        <div className='flex-col space-y-2 mt-3'>
            <h3 className='text-lg'> پاسخ خود را ثبت کنید</h3>
            <p className='text-base'>پاسخ خود را بنویسید</p>
            <textarea value={newComment} onChange={onChangeNewComment} className='w-full rounded-md h-40 p-2' />
            {error && <p className='text-red-500 text-base'>{error}</p>}
            <button disabled={!newComment} onClick={onSubmitNewComment} className='px-10 py-1 bg-green-600 text-sm border-green-600 hover:bg-green-700 rounded-md ml-4 text-white'>ارسال پاسخ</button>
        </div>
    )
}