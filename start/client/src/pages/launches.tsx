import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {RouteComponentProps} from '@reach/router';
import {LoadDataContainer} from '../containers/LoadDataContainer';
import {GET_LAUNCHES} from '../gql/launches';
import * as GetLaunchListTypes from './__generated__/GetLaunchList';
import {Button, Header, LaunchTile, Loading} from '../components';

interface LaunchesProps extends RouteComponentProps {
}

const Launches: React.FC<LaunchesProps> = () => {
    const {data, loading, error, fetchMore} = useQuery<GetLaunchListTypes.GetLaunchList,
        GetLaunchListTypes.GetLaunchListVariables>(GET_LAUNCHES);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const onFetchMore = async () => {
        setIsLoadingMore(true);
        await fetchMore({
            variables: {
                after: data?.launches?.cursor,
            },
        });
        setIsLoadingMore(false);
    };

    return (
        <LoadDataContainer data={data} loading={loading} error={error}>
            <>
                <Header />
                {data?.launches?.launches?.map((launch: any) => (
                    <LaunchTile key={launch.id} launch={launch} />
                ))}
                {data?.launches?.hasMore && (
                    isLoadingMore
                        ? <Loading />
                        : <Button onClick={onFetchMore}>Load More</Button>
                )}
            </>
        </LoadDataContainer>
    )
};

export default Launches;
