import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(fr|en|es)/:path*'],
};
