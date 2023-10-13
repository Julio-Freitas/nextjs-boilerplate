import React from 'react';
import { AnimatedLink } from '..';
import * as S from './styles';
export default function Header() {
  return (
    <S.Nav>
      <AnimatedLink href="/">Home</AnimatedLink>
      <AnimatedLink href="/about">About</AnimatedLink>
    </S.Nav>
  );
}
