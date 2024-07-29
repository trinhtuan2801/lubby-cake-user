import type { Metadata } from 'next';
import { Inter, Playpen_Sans } from 'next/font/google';
import './globals.css';
import Box from '@mui/joy/Box';
import Background from '@/components/Background/Background';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Header from '@/components/Header/Header';
import APP_ENV from '@/env';

const inter = Inter({
  subsets: ['vietnamese'],
  display: 'swap',
  adjustFontFallback: false,
});
const playpen = Playpen_Sans({
  variable: '--font-playpen-sans',
  subsets: ['vietnamese'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_ENV.WEB_BASE_URL!),
  title: 'Lubby Cake',
  description: 'Lubby Cake - Bánh ngon mỗi ngày',
  openGraph: {
    url: 'https://lubbycake.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${playpen.className}`}>
        <ThemeRegistry options={{ key: 'joy' }}>
          <Background />
          <Header />
          <Box display='flex' justifyContent='center'>
            <Box flexGrow={1} maxWidth='1200px'>
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
