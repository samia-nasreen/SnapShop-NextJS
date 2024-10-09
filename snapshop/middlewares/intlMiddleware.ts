import createMiddleware from 'next-intl/middleware';
import { MiddlewareFactory } from './stackMiddlewares';

const handleIntlMiddleware = createMiddleware({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'en',
});

export const handleLangMiddleware: MiddlewareFactory =
  (next) => (req, event) => {
    const response = handleIntlMiddleware(req);
    return response || next(req, event);
  };
