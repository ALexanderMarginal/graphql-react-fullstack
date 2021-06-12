import React, {ReactElement} from 'react';
import {Loading} from '../components';

interface LoadDataContainerProps {
    loading: boolean;
    error: any;
    children: ReactElement;
    data?: any;
    checkData?: boolean
}

export const LoadDataContainer: React.FC<LoadDataContainerProps> = ({
    data,
    loading,
    error,
    checkData = true,
    children,
}) => {
    if (loading) return <Loading />;
    if (error) return <p>ERROR</p>;
    if (checkData && !data) return <p>Not found</p>;
    return children;
};
