import React from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  cache : InMemoryCache(),
  uri: 'http://localhost:4000/',
})


const root = createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client} > 
    <GlobalStyles />
    <Pages />
  </ApolloProvider>
);
