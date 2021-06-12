import {gql} from '@apollo/client';

export const GET_CART_ITEMS = gql`
    query GetCartItems {
        cartItems @client
    }
`;

export const BOOK_TRIPS = gql`
    mutation BookTrips($launchIds: [ID]!) {
        bookTrips(launchIds: $launchIds) {
            success
            message
            launches {
                id
                isBooked
            }
        }
    }
`;

export const CANCEL_TRIP = gql`
    mutation cancel($launchId: ID!) {
        cancelTrip(launchId: $launchId) {
            success
            message
            launches {
                id
                isBooked
            }
        }
    }
`;
