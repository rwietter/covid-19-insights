/* eslint-disable react/no-danger */
import type { AppProps } from 'next/app';
import React, { type ReactNode } from 'react';

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
