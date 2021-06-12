module.exports = async (_, {email}, {dataSources}) => {
    const user = await dataSources.userAPI.findOrCreateUser({email});
    if (user) {
        user.token = Buffer.from(email).toString('base64');
        return user;
    }
};
