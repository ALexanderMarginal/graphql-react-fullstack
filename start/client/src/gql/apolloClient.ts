import {ApolloClient, NormalizedCacheObject} from '@apollo/client';
import {cache} from '../cache';
import {USER_TOKEN} from '../constants';
import cookies from '../cookies';
import {typeDefs} from './typeDefs';

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql',
    headers: {
        authorization: cookies.get(USER_TOKEN) || '',
    },
    typeDefs,
});
