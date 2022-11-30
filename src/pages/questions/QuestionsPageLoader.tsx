import React, { PropsWithChildren, Suspense } from 'react';
import { SpinnerLoading } from '../../components/loading';

const QuestionsPage = React.lazy(() => import(/* webpackChunkName: "questions-page" */ './QuestionsPage'));

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function QuestionsPageLoader(props: Props) {
  return (
    <Suspense fallback={<SpinnerLoading/>}>
      <QuestionsPage />
      </Suspense>
  );
}
