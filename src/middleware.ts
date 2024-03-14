import { NextResponse } from 'next/server';

const allowedOrigins = ['https://lubby-cake-admin.vercel.app'];

export function middleware(req: Request) {
  const origin = req.headers.get('origin');

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
