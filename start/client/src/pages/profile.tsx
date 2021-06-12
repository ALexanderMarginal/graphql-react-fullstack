import {useQuery} from '@apollo/client';
import React from 'react';
import {RouteComponentProps} from '@reach/router';
import {Header, LaunchTile} from '../components';
import {LoadDataContainer} from '../containers/LoadDataContainer';
import {GET_MY_TRIPS} from '../gql/profile';
import * as GetMyTripsTypes from './__generated__/GetMyTrips';

interface ProfileProps extends RouteComponentProps {
}

const Profile: React.FC<ProfileProps> = () => {
    const {
        data,
        loading,
        error,
    } = useQuery<GetMyTripsTypes.GetMyTrips>(
        GET_MY_TRIPS,
        {fetchPolicy: 'network-only'},
    );
    return (
        <LoadDataContainer data={data} loading={loading} error={error}>
            <>
                <Header>My Trips</Header>
                {data?.me?.trips.length ? (
                    data.me.trips.map((launch: any) => (
                        <LaunchTile key={launch.id} launch={launch} />
                    ))
                ) : (
                    <p>You haven't booked any trips</p>
                )}
            </>
        </LoadDataContainer>
    );
};

export default Profile;
