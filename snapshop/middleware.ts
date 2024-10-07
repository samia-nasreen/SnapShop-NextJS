import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const i18nMiddleware = createMiddleware({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'en',
});

const isAuthenticated = (req: NextRequest) => {
  const token = req.cookies.get('authToken');
  console.log('Token:', token);
  return token !== undefined;
};

const protectedRoutesMiddleware = (req: NextRequest) => {
  const protectedRoutes = ['/(fr|en|es)/checkout'];

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !isAuthenticated(req)) {
    return NextResponse.redirect(new URL('/en/login', req.url));
  }

  return NextResponse.next();
};

export function middleware(req: NextRequest) {
  const i18nResponse = i18nMiddleware(req);
  if (i18nResponse) {
    return i18nResponse;
  }
  return protectedRoutesMiddleware(req);
}

export const config = {
  matcher: ['/', '/(fr|en|es)/:path*'],
};
