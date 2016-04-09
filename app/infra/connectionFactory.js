module.exports = {
    openConnection: function() {
        // Connects in PostgreSQL
        var pg        = require('pg');
        var conString = "postgres://postgres:123456@192.168.33.10/supermarket_control_db";
        var client    = new pg.Client(conString);

        client.connect(function(err) {
            if(err) {
                return console.error("Could not connect to postgres", err);
            }
        });
        return client;
    },

    closeConnection: function(client) {
        client.end();
    }
}