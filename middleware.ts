// middleware.ts
import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Your middleware logic goes here
  // You can modify the request, return a response, or perform any other actions
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.swa).*)'],
};
