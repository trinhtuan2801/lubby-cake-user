import { NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json({ Message: 'Success', status: 201 });
};
