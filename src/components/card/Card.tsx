import React, { PropsWithChildren, ReactElement } from 'react';
import AvatarIcon from '../../assets/icons/AvatarIcon.svg'
import { DateOutput } from '../../shared/domains/date';
import { TimeOutput } from '../../shared/domains/time';

interface OwnProps {
    title: string;
    description: string;
    avatarUrl?: string;
    dateTime: Date;
    actions?: ReactElement;
    additionalInfo?: ReactElement

};

type Props = PropsWithChildren<OwnProps>;


export function Card(props: Props) {
    return (
        <div className='bg-gray-50 shadow-md w-full'>
            <div className='bg-white shadow-sm flex px-4 py-2 w-full items-center'>
                <div className="flex items-center ">
                    <img className="w-10 h-10 rounded-md ml-2" src={props.avatarUrl ? props.avatarUrl : AvatarIcon} alt="" />
                    <h3 className="text-base-b ">{props.title}</h3>
                </div>
                <div className='flex-1' />
                <div className='inline-flex'>
                    <span className='text-sm text-slate-400 mx-2'>ساعت : {<TimeOutput className='text-gray-800' value={props.dateTime} />} </span>
                    <span className='text-sm text-slate-400 mx-2'> | </span>
                    <span className='text-sm text-slate-400 mx-2'>تاریخ : {<DateOutput className='text-gray-800' value={props.dateTime} />}</span>
                    {props.additionalInfo ? props.additionalInfo : null}
                </div>
            </div>
            <div className='px-3 py-6'>
                <p className='text-base'>{props.description}</p>
            </div>
            {props.actions && <div className='flex flex-row-reverse p-3'>
                {props.actions}
            </div>}
        </div>
    )
}