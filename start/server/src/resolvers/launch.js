module.exports = (_, {id}, {dataSources}) => {
    return dataSources.launchAPI.getLaunchById({launchId: id});
};
