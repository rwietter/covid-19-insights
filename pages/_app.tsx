import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { type ReactNode } from 'react';

import '../styles/globals.css';
import '../styles/styles.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/services/graphql/apollo';

ChartJS.defaults.scale.grid.display = false;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <>
      <Head>
        <title>Covid-19 Insights</title>
        <meta name='title' content='Insightcore' />
        <meta name='description' content='Insightcore ajuda você a ter uma visão completa da pandemia do COVID-19 no Brasil' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        <meta name='theme-color' content='#000000' />
        <meta name='content-language' content='pt-BR' />
        <meta name='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='X-UA-Compatible' content='IE=edge' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='author' content='Insightcore' />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name='keywords' content='covid, covid-19, covid19, coronavírus, pandemia, brasil, dados, informações, gráficos, gráficos interativos, gráficos animados, gráficos animados interativos, gráficos animados interativos covid-19' />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
