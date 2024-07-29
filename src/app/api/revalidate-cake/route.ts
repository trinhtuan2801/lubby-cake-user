import { CACHE_KEY } from '@/api/queryKeys';
import APP_ENV from '@/env';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { secretKey } = await request.json();

    if (secretKey !== APP_ENV.REVALIDATE_CAKE_SECRET_KEY) throw new Error();

    revalidateTag(CACHE_KEY.CAKES);

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json({ success: false }, { status: 401 });
  }
}
