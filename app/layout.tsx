import type { Metadata } from 'next';
import './globals.css';

const siteTitle = 'Tomasz Paczka';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s · ${siteTitle}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
