import Cookies from 'universal-cookie';
import {ApolloClient, NormalizedCacheObject} from '@apollo/client';
import {cache} from '../cache';
import {USER_TOKEN} from '../constants';

const cookies = new Cookies();

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql',
    headers: {
        authorization: cookies.get(USER_TOKEN) || '',
    },
});
