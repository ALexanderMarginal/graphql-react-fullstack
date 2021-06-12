import {useMutation} from '@apollo/client';
import React from 'react';
import Button from '../components/button';
import {cartItemsVar} from '../cache';
import {BOOK_TRIPS} from '../gql/cart';
import * as GetCartItemsTypes from '../pages/__generated__/GetCartItems';
import * as BookTripsTypes from './__generated__/BookTrips';

interface BookTripsProps extends GetCartItemsTypes.GetCartItems {
}

const BookTrips: React.FC<BookTripsProps> = ({cartItems}) => {
    const [bookTrips, {data}] = useMutation<BookTripsTypes.BookTrips,
        BookTripsTypes.BookTripsVariables>
    (
        BOOK_TRIPS,
        {
            variables: {launchIds: cartItems},
        },
    );

    const onBookAll = async () => {
        await bookTrips();
        cartItemsVar([]);
    }

    return data && data.bookTrips && !data.bookTrips.success
        ? <p data-testid="message">{data.bookTrips.message}</p>
        : (
            <Button
                onClick={onBookAll}
                data-testid="book-button"
            >
                Book All
            </Button>
        );
};

export default BookTrips;
