// Reference: https://github.com/zeit/next.js/tree/canary/examples/with-apollo

import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

function create (initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: 'http://localhost:4000/',
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo (initialState) {
  if (!process.browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
