import React, { PropsWithChildren } from 'react'

interface OwnProps { };

type Props = PropsWithChildren<OwnProps>;

export function SpinnerLoading(props: Props) {
    return (
        <div className="flex justify-center items-center h-80">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full">
            </div>
        </div>
    )
}