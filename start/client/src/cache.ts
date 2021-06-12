import {InMemoryCache, Reference} from '@apollo/client';

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
