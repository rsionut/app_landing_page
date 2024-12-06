import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { siteConfig } from "@/utils/site";
import "../../assets/css/globals.css";

type LayoutProps = {
    children: React.ReactNode;
    params: { locale: string }
}

const geistSans = localFont({
  src: "../../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: {
    name: siteConfig.author,
    url: siteConfig.url.author,
  },
  creator: siteConfig.author,
  publisher: siteConfig.author,
  openGraph: {
    locale: "en_US",
    type: "website",
    description: siteConfig.description,
    url: siteConfig.url.base,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.author,
  }
};

export default async function RootLayout({
  children,
  params: { locale }
}: LayoutProps) {

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          href="/images/app_store.svg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/google_play.svg"
          as="image"
        />
      </head>
      <link rel="icon" href="/header_icon.ico" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
