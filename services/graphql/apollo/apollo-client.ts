import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache({
    resultCacheMaxSize: 12000,
  }),
  credentials: 'omit',
  name: 'covid-insights',
  version: '1.0',
  connectToDevTools: true,
});

export { client };
