import { Html, Head, Main, NextScript } from 'next/document';
import { type ReactNode } from 'react';
import { meta } from '../public/meta';

export default function Document (): ReactNode {
  return (
    <Html>
      <Head>
        {meta.map((meta, index) => (
          <meta key={index} {...meta} />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
