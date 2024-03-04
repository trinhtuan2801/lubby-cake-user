import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Box from '@mui/joy/Box';
import Background from '@/components/Background/Background';

const inter = Inter({ subsets: ['vietnamese'] });

export const metadata: Metadata = {
  title: 'Lubby Cake',
  description: 'Lubby Cake - Bánh ngon mỗi ngày',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Background />
        <Box display='flex' justifyContent='center'>
          <Box flexGrow={1} maxWidth='1200px'>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
