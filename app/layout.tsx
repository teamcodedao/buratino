import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const font = localFont({
  src: './QuickPencil-Regular.ttf',
});

export const metadata: Metadata = {
  title: 'Buratino',
  description: 'Buratino',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
