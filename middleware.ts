import createMiddleware from 'next-intl/middleware';
import { locales } from './app/_data/locales';

export default createMiddleware({
  defaultLocale: 'en',
  locales
});
 
export const config = {
  matcher: ['/', '/(de|en|es|nl)/:path*']
};