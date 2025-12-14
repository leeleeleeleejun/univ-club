import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/app/_components/Footer';
import { Analytics } from '@vercel/analytics/next';
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Thin-Subset.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraLight-Subset.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Light-Subset.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular-Subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium-Subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold-Subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold-Subset.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraBold-Subset.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Black-Subset.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: '공주대 동아리',
  description: '공주대학교 동아리 플랫폼',
  openGraph: {
    title: '공주대 동아리',
    description: `공주대학교 동아리 플랫폼`,
    locale: 'ko-KR',
    siteName: 'univ-club.vercel.app',
    url: `https://univ-club.vercel.app`,
    type: 'website',
  },
  verification: {
    google: "V7HHh8j_iC1XOgyct3SZSD2jd6mlETNzKFD4qV6WPlA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${pretendard.className} antialiased max-w-[500px] h-screen flex flex-col m-auto justify-between text-gray-800`}
      >
        <div className={'grow flex flex-col'}>{children}</div>
        <Analytics />
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Footer />
      </body>
    </html>
  );
}
