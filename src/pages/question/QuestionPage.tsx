import React, { PropsWithChildren } from 'react';
import { Header } from '../../components/header';

interface OwnProps { };

type Props = PropsWithChildren<OwnProps>;

export default function QuestionPage(props: Props) {
    return (
        <div className='relative'>
            <Header title='جزییات سوال' />
            <div className='flex flex-col p-5 m-6 mt-14'>
                <div className='space-y-5'>
                    Comments
                </div>
                <div className='flex-col space-y-2 mt-3'>
                    <h3 className='text-lg'> پاسخ خود را ثبت کنید</h3>
                    <p className='text-base'>پاسخ خود را بنویسید</p>
                    <textarea className='w-full rounded-md h-40 p-2'/>
                    <button className='px-10 py-1 bg-green-600 text-sm border-green-600 rounded-md ml-4 text-white'>ارسال پاسخ</button>
                </div>
            </div>

        </div>
    )
}