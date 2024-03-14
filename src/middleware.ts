import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = ['https://lubby-cake-admin.vercel.app'];

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');

  // eslint-disable-next-line
  console.log('origin', origin);
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);

  if (!isAllowedOrigin) {
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
