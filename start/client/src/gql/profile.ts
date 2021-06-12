import {gql} from '@apollo/client';
import {LAUNCH_TILE_DATA} from './launches';

export const LOGIN_USER = gql`
    mutation Login($email: String) {
        login(email: $email) {
            id
            token
        }
    }
`;

export const GET_MY_TRIPS = gql`
    query GetMyTrips {
        me {
            id
            email
            trips {
                ...LaunchTile
            }
        }
    }
    ${LAUNCH_TILE_DATA}
`;
