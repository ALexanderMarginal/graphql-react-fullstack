import {ApolloClient, ApolloProvider, NormalizedCacheObject} from '@apollo/client';
import {CookiesProvider} from 'react-cookie';
import {cache} from './cache';
import ReactDOM from 'react-dom';
import {apolloClient} from './gql/apolloClient';
import Pages from './pages';
import React from 'react';

ReactDOM.render(
    <CookiesProvider>
        <ApolloProvider client={apolloClient}>
            <Pages />
        </ApolloProvider>
    </CookiesProvider>,
    document.getElementById('root'),
);
