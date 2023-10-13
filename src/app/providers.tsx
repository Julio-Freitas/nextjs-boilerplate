import { PropsWithChildren } from 'react';
import { GlobalStyle } from '@/styles/global';

export default function Provider({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
