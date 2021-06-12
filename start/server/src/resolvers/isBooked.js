module.exports = async (launch, _, {dataSources}) =>
    dataSources.userAPI.isBookedOnLaunch({launchId: launch.id});
