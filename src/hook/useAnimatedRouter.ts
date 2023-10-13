'use client';
import { ExtendedDocument } from '@/types/extendedDocument';
import { useRouter } from 'next/navigation';

export function useAnimatedRouter() {
  const router = useRouter();

  /** verify if the browser support View Transitions API */
  const viewTransitionsStatus = () => {
    const extendedDocument = document as ExtendedDocument;
    let status = "Opss, Your browser doesn't support View Transitions API";
    if (extendedDocument?.startViewTransition) {
      status = 'Yess, Your browser support View Transitions API';
    }
    return status;
  };

  /** encapsulate the default router.push */
  const animatedRoute = (url: string) => {
    const extendedDocument = document as ExtendedDocument;
    // it has not startViewTransition... follow the pelota kkk
    if (!extendedDocument.startViewTransition) return router.push(url);
    // start animate
    extendedDocument.startViewTransition(() => router.push(url));
  };

  return { animatedRoute, viewTransitionsStatus };
}
