import React, { PropsWithChildren, useCallback, useState } from 'react';
import { PlusIcon } from "../../assets/icons";
import AvatarIcon from '../../assets/icons/AvatarIcon.svg'
import { QuestionModal } from '../question-modal/QuestionModal';


interface OwnProps {
    title: string
};

type Props = PropsWithChildren<OwnProps>

export function Header(props: Props) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const onCloseModal = useCallback(() => {
        setShowModal(false)
    }, [setShowModal])

    return (
        <div>
            <header>
                <nav className='fixed h-16 flex py-4 px-10 bg-white shadow-md w-full align-middle justify-center top-0'>
                    <h1 className='text-lg'>{props.title}</h1>
                    <div className='flex-1' />
                    <button onClick={() => setShowModal(true)} className="p-3 bg-green-600 text-sm border-green-600 rounded-md ml-4 text-white inline-flex items-center">
                        <PlusIcon className="ml-1" />سوال جدید
                    </button>
                    <div className='inline-flex justify-center items-center space'>
                        <img src={AvatarIcon} alt='test' className='w-10 h-10 rounded-full ml-2' />
                        <p>عرفان حسن زاده</p>
                    </div>
                </nav>
            </header>
            <QuestionModal open={showModal} onClose={onCloseModal} />
        </div>
    )
}