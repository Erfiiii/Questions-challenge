import React, { PropsWithChildren } from 'react';

const QuestionPage = React.lazy(() => import(/* webpackChunkName: "questions-page" */ './QuestionPage'));

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function QuestionPageLoader(props: Props) {
  return (
      <QuestionPage />
  );
}
