import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/app/_components/Footer';
import { Analytics } from '@vercel/analytics/next';

const isDevelopment =
  process.env.NEXT_ANALYTICS_MODE === 'development'
    ? 'development'
    : 'production';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});
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
        <Analytics mode={isDevelopment} />
        <Footer />
      </body>
    </html>
  );
}
