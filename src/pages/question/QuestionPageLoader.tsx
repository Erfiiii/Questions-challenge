import React, { PropsWithChildren, Suspense } from 'react';
import { SpinnerLoading } from '../../components/loading';

const QuestionPage = React.lazy(() => import(/* webpackChunkName: "questions-page" */ './QuestionPage'));

interface OwnProps { }

export type Props = PropsWithChildren<OwnProps>;

export function QuestionPageLoader(props: Props) {
  return (
    <Suspense fallback={<SpinnerLoading />}>
      <QuestionPage />
    </Suspense>
  );
}
