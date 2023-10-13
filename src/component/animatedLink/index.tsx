'use client';

import { useAnimatedRouter } from '../../hook/useAnimatedRouter';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const AnimatedLink = ({
  children,
  href
}: PropsWithChildren<{ href: string }>) => {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link href={href} onClick={() => animatedRoute(href)} passHref>
      {children}
    </Link>
  );
};
