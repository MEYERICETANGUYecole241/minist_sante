// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './src/i18nConfig';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ne pas appliquer à :
  // - Répertoires _next, _next/static, _next/image
  // - Fichiers publics (favicon.ico, robots.txt, etc.)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt')
  ) {
    return NextResponse.next();
  }

  // Vérifie si l’URL commence déjà par une locale valide
  const hasLocaleInPath = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!hasLocaleInPath) {
    // Redirige vers la même route mais préfixée avec la locale par défaut
    const destination = new URL(`/${defaultLocale}${pathname}`, request.url);
    return NextResponse.redirect(destination);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Applique le middleware à toutes les routes sauf les fichiers statiques / _next
    '/((?!_next/static|_next/image|favicon.ico|robots.txt).*)',
  ],
};
