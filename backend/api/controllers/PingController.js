module.exports = {

    ping: function (req, res) {
        return res.json({
            err: 200,
            message: 'pong',
        });
    },

};