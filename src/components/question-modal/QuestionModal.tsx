import React, { PropsWithChildren, useState } from 'react';
import { CloseIcon } from "../../assets/icons";
import { addNewQuestion } from '../../pages/questions/questionsSlice';
import { useAppDispatch } from '../../redux/hooks';


interface OwnProps {
    open: boolean,
    onClose: () => void;
};

type Props = PropsWithChildren<OwnProps>

export function QuestionModal(props: Props) {
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('')
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }
    const onSubmit = async () => {
        await dispatch(addNewQuestion({
            title,
            description
        })).unwrap()
        setTitle('')
        setDescription('');
        props.onClose()
    }

    return props.open ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={props.onClose}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative bg-gray-100 w-full max-w-lg mx-auto rounded-md shadow-lg">
                        <div className="bg-white shadow-sm flex w-full items-center py-4 px-3 rounded-t ">
                            <h3 className="text-base-b mr-2 ">ایجاد سوال جدید</h3>
                            <div className="flex-1" />
                            <button onClick={props.onClose}><CloseIcon /></button>
                        </div>
                        <div className="p-6 flex flex-col space-y-2">
                            <div>
                                <p className="text-sm">موضوع</p>
                                <input value={title} onChange={onChangeTitle} className='w-full rounded-md h-9 p-2' />
                            </div>
                            <div>
                                <p className="text-sm">متن سوال</p>
                                <textarea value={description} onChange={onChangeDescription} className='w-full rounded-md h-28 p-2' />
                            </div>
                            <div className="flex flex-row-reverse">
                                <button onClick={onSubmit} disabled={!title || !description} className="px-3 py-1 text-center hover:bg-green-700 bg-green-600 text-sm border-green-600 rounded-md text-white inline-flex items-center">ایجاد سوال</button>
                                <button className="px-3 py-1 text-center text-green-600 text-sm border-green-600  rounded-md ml-4 inline-flex items-center" onClick={props.onClose}>انصراف</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ) : null
}
