import { defaultLocale, localePrefix, locales } from "./i18n/request";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: localePrefix
});

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|header_icon.ico|images).*)',
        '/(fr|nl|en)/:path*'
    ]
}