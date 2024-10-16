import { stackMiddlewares } from '@/middlewares/stackMiddlewares';
import { handleLangMiddleware } from '@/middlewares/intlMiddleware';
import { handleAuthMiddleware } from '@/middlewares/authMiddleware';
import { NextFetchEvent, NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const middlewareStack = stackMiddlewares([
    handleAuthMiddleware,
    handleLangMiddleware,
  ]);

  return middlewareStack(req, event);
}
