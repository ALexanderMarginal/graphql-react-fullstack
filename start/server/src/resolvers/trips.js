module.exports = async (_, __, {dataSources}) => {
    // get ids of launches by user
    const launchIds = await dataSources.userAPI.getLaunchIdsByUser();

    if (!launchIds.length) return [];

    // look up those launches by their ids
    return (
        dataSources.launchAPI.getLaunchesByIds({
            launchIds,
        }) || []
    );
};
