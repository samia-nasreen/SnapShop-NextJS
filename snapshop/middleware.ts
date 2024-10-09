import { stackMiddlewares } from '@/middlewares/stackMiddlewares';
import { handleLangMiddleware } from '@/middlewares/intlMiddleware';
import { handleAuthMiddleware } from '@/middlewares/authMiddleware';
import { NextFetchEvent, NextRequest } from 'next/server';

export const config = {
  matcher: ['/', '/(fr|en|es)/:path*', '/:locale/checkout'],
};

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const middlewareStack = stackMiddlewares([
    handleAuthMiddleware,
    handleLangMiddleware,
  ]);

  return middlewareStack(req, event);
}
