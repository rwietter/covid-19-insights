import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
  credentials: 'omit',
  name: 'covid-insights',
  version: '1.0',
  connectToDevTools: true
});

export { client };
