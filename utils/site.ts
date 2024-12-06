import { env } from "@/env.mjs";

type SiteConfig = {
    name: string;
    author: string;
    description: string;
    keywords: string[];
    url: {
        base: string;
        author: string;
    };
    links: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    headerLinks: [{
        name: string;
        href: string;
    }];
    ogImage: string;
}

export const siteConfig: SiteConfig = {
    name: 'App Landing Page',
    author: 'Rouleur',
    description: 'Rouleur is an application for cyclists',
    keywords: ['cycling', 'social media', 'cycling community'],
    url: {
        base: env.NEXT_PUBLIC_SITE_URL,
        author: 'https://rouleur.bike',
    },
    links: {
        twitter: 'https://twitter.com/rouleur',
        facebook: 'https://facebook.com/rouleur',
        instagram: 'https://instagram.com/rouleur',
    },
    headerLinks: [
        {
            name: 'Home',
            href: '/',
        },
    ],
    ogImage: '/images/og.png',
}
