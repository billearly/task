// Reference: https://github.com/zeit/next.js/tree/canary/examples/with-apollo

import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { taskFeedUri } from './connection-string';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

function create (initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: taskFeedUri,
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
