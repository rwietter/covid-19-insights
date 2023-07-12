import { Html, Head, Main, NextScript } from 'next/document';
import { type ReactNode } from 'react';

export default function Document(): ReactNode {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://rsms.me/' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
