import type { Metadata } from 'next';
import './globals.css';

const siteTitle = 'Tomasz Paczka';
const siteDescription =
  'Software engineer focused on web applications, APIs, and reliable backend systems.';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s · ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
