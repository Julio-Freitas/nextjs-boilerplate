'use client';

import { PropsWithChildren } from 'react';

import * as S from './style';
export function AnimatedTemplate({
  children,
  title
}: PropsWithChildren<{ title: string }>) {
  return (
    <>
      <S.Title className="pageTitle">{title}</S.Title>
      <div className="pageContent text-center line-clamp-3">{children}</div>
    </>
  );
}
