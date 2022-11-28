import React, { PropsWithChildren } from 'react';
import { formatDate } from './format-date';

interface OwnProps {
  value: Date;
  className?: string;
}

type Props = PropsWithChildren<OwnProps>;


export function DateOutput(props: Props) {
  const { value, className} = props;
  const text = formatDate(value);
  return <span className={className}>{text}</span>;
}
