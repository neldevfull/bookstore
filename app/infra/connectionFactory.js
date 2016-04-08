module.exports = {
    pgConnection: function() {
        // Connects in PostgreSQL
        var pg        = require('pg');
        var conString = "postgres://postgres:123456@192.168.33.10/supermarket_control_db";

        return new pg.Client(conString);
    }
}