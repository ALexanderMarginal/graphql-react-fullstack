import {ApolloProvider, useQuery} from '@apollo/client';
import {CookiesProvider} from 'react-cookie';
import ReactDOM from 'react-dom';
import {apolloClient} from './gql/apolloClient';
import {IS_LOGGED_IN} from './gql/profile';
import Pages from './pages';
import React from 'react';
import Login from './pages/login';
import globalStyles from './styles';

globalStyles();

function IsLoggedIn() {
    const {data} = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? <Pages /> : <Login />;
}

ReactDOM.render(
    <CookiesProvider>
        <ApolloProvider client={apolloClient}>
            <IsLoggedIn />
        </ApolloProvider>
    </CookiesProvider>,
    document.getElementById('root'),
);
