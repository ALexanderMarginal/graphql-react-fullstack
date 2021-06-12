import {ApolloClient, ApolloProvider, NormalizedCacheObject} from '@apollo/client';
import {cache} from './cache';
import ReactDOM from 'react-dom';
import Pages from './pages';
import React from 'react';

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Pages/>
    </ApolloProvider>,
    document.getElementById('root')
)
