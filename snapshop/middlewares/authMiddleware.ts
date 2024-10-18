import { MiddlewareFactory } from './stackMiddlewares';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/checkout', '/orders', '/profile', '/orders/[id]'];

export const handleAuthMiddleware: MiddlewareFactory =
  (next) => (req, event) => {
    const { pathname } = req.nextUrl;

    const isProtectedRoute = protectedRoutes.some((route) => {
      const regex = new RegExp(
        `^/(fr|en|es)?${route.replace(/\[\w+\]/, '\\w+')}(/.*)?$`
      );
      return regex.test(pathname);
    });

    if (isProtectedRoute) {
      const token = req.cookies.get('authToken');

      if (!token) {
        const locale = req.nextUrl.pathname.split('/')[1] || 'en';
        const url = new URL(`/${locale}/login`, req.url);
        return NextResponse.redirect(url);
      }
    }

    return next(req, event);
  };
