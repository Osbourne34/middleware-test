import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export default async (request: NextRequest) => {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return
  }

  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  if (!token) {
    if (pathname === '/cart') {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  if (token) {
    if (pathname === '/login') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}
