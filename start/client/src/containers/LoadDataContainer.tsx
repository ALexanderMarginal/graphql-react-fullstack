import React, {ReactElement} from 'react';
import {Loading} from '../components';

interface LoadDataContainerProps {
    data: any;
    loading: boolean;
    error: any;
    children: ReactElement;
}

export const LoadDataContainer: React.FC<LoadDataContainerProps> = ({data, loading, error, children}) => {
    if (loading) return <Loading />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    return children;
};
