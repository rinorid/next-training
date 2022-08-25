import {NextResponse} from 'next/server';

function middleware(req) {
  const status = req.cookies.get('status');
  const role = req.cookies.get('role');
  const { origin } = req.nextUrl;

  console.log(status, role);

  if (req.nextUrl.pathname.startsWith('/backoffice/superadmin')) {
    if (status == 'authenticated' && role != 'superadmin') {
      return NextResponse.rewrite(`${origin}/backoffice`)
    }
  }

  if (status != 'authenticated' && (role != 'admin' || role != 'superadmin')) {
    return NextResponse.rewrite(`${origin}/login`)
  }
}

export default middleware

export const config = {
  matcher: '/backoffice/:path*',
}