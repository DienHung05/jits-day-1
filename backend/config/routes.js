module.exports.routes = {

    'POST /ping': {
        controller: 'PingController',
        action: 'ping',
        cors: {
        origin: 'http://localhost:5174',
        credentials: false,
        },
    },

};
