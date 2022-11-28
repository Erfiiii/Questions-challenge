import React, { PropsWithChildren } from 'react';

const QuestionsPage = React.lazy(() => import(/* webpackChunkName: "questions-page" */ './QuestionsPage'));

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function QuestionsPageLoader(props: Props) {
  return (
      <QuestionsPage />
  );
}
