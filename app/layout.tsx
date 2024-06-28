import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const font = localFont({
  src: './QuickPencil-Regular.ttf',
});

export const metadata: Metadata = {
  title: 'Buratino',
  description:
    "Buratino is the main character in the famous Russian fairy tale written by Aleksey Tolstoy. Buratino is a mischievous and clever wooden boy, always seeking new adventures. The image of Buratino symbolizes joy, creativity, and the spirit of exploration. And this time, Buratino's new journey is taking us to a land of riches! If BURATINO tells a lie, his nose will grow longer!",
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
