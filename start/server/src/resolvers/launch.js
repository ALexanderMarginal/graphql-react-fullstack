module.exports = (_, {id}, {dataSources}) =>
    dataSources.launchAPI.getLaunchById({launchId: id});
