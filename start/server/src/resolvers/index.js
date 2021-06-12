const launches = require('./launches');
const launch = require('./launch');
const me = require('./me');
const missionPatch = require('./missionPatch');
const isBooked = require('./isBooked');
const trips = require('./trips');
const login = require('./login');
const bookTrips = require('./bookTrips');
const cancelTrip = require('./cancelTrip');

module.exports = {
    Query: {
        // (parent, args, context, info)
        launches,
        launch,
        me,
    },
    Mutation: {
        login,
        bookTrips,
        cancelTrip,
    },
    Mission: {
        // The default size is 'LARGE' if not provided
        missionPatch,
    },
    Launch: {
        isBooked,
    },
    User: {
        trips,
    },
};
