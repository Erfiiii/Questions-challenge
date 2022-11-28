import React, { PropsWithChildren } from 'react';
import { Card } from '../../components/card';
import { Header } from '../../components/header';
import {MessageIcon, SadIcon, SmileIcon} from "../../assets/icons";

interface OwnProps { 
};

type Props = PropsWithChildren<OwnProps>;

export default function QuestionsPage(props: Props) {
    return (
        <div className='relative'>
            <Header title='لیست سوالات' />
            <div className='flex flex-col p-5 m-6 space-y-5 mt-14'>
               Questions
            </div>
        </div>
    )
}