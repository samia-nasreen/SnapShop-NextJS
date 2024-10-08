import { NextResponse, type NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken');

  if (!token) {
    const url = new URL('/login', req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/checkout',
};
