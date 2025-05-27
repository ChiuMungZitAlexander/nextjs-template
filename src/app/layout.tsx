import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import './app.css';

const font = localFont({ src: '../../public/fonts/Figtree-Regular.ttf' });

export const metadata: Metadata = {
  title: '',
  description: '',
  keywords: [],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html className="scroll-smooth" lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
    <body className={`${font.className}`}>{children}</body>
  </html>
);

export default RootLayout;
