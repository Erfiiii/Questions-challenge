import React, { PropsWithChildren, ReactNode } from 'react';
import { formatTime } from './format-time';

interface OwnProps {
  value: Date;
  className?: string;
}

type Props = PropsWithChildren<OwnProps>;


export function TimeOutput(props: Props) {
  const { value, className} = props;
  const text = formatTime(value);
  return <span className={className}>{text}</span>;
}
