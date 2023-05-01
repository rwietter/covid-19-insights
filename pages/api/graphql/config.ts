import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.API_KEY,
  cache: new InMemoryCache()
});
