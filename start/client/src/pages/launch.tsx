import {useQuery} from '@apollo/client';
import React from 'react';
import {RouteComponentProps} from '@reach/router';
import {Header, LaunchDetail} from '../components';
import {ActionButton} from '../containers';
import {LoadDataContainer} from '../containers/LoadDataContainer';
import {GET_LAUNCH_DETAILS} from '../gql/launches';
import * as LaunchDetailsTypes from './__generated__/LaunchDetails';

interface LaunchProps extends RouteComponentProps {
    launchId?: any;
}

const Launch: React.FC<LaunchProps> = ({launchId}) => {
    const {
        data,
        loading,
        error,
    } = useQuery<LaunchDetailsTypes.LaunchDetails,
        LaunchDetailsTypes.LaunchDetailsVariables>(GET_LAUNCH_DETAILS, {
        variables: {launchId},
    });

    return (
        <LoadDataContainer loading={loading} data={data} error={error}>
            <>
                <Header image={data?.launch?.mission?.missionPatch}>
                    {data?.launch?.mission?.name}
                </Header>
                <LaunchDetail {...data?.launch} />
                <ActionButton {...data?.launch} />
            </>
        </LoadDataContainer>
    );
};

export default Launch;
