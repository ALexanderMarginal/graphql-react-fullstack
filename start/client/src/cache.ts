import {InMemoryCache, makeVar, Reference} from '@apollo/client';
import {USER_TOKEN} from './constants';
import cookies from './cookies';

// Initializes to true if localStorage includes a 'token' key,
// false otherwise
export const isLoggedInVar = makeVar<boolean>(!!cookies.get(USER_TOKEN));

// Initializes to an empty array
export const cartItemsVar = makeVar<string[]>([]);

/*
* Эта merge функция берет наши existing кэшированные запуски и incoming запуски
* и объединяет их в один список, который затем возвращает. Кэш хранит этот
* объединенный список и возвращает его всем запросам, использующим это
* launches поле.
* */
export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return isLoggedInVar();
                    },
                },
                cartItems: {
                    read() {
                        return cartItemsVar();
                    },
                },
                launches: {
                    keyArgs: false,
                    merge(existing, incoming) {
                        let launches: Reference[] = [];
                        if (existing && existing.launches) {
                            launches = launches.concat(existing.launches);
                        }
                        if (incoming && incoming.launches) {
                            launches = launches.concat(incoming.launches);
                        }
                        return {
                            ...incoming,
                            launches,
                        };
                    },
                },
            },
        },
    },
});
