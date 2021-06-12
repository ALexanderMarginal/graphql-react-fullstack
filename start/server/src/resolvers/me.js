module.exports = async (_, __, {dataSources}) =>
    dataSources.userAPI.findOrCreateUser();
