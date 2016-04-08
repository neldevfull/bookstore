module.exports = function(app) {
    app.get("/products", function(request, response) {
        // Connects in PostgreSQL
        var pg = require('pg');
        var conString = "postgres://postgres:123456@192.168.33.10/supermarket_control_db";

        var client = new pg.Client(conString);

        client.connect(function(err) {
            if(err) {
                return console.error("could not connect to postgres", err);
            }
            client.query("SELECT * FROM products", function(err, results) {
                if(err) {
                    return console.error("error running query", err);
                }
                response.render("products/list", { list: results.rows });
                client.end();
            });
        });
    });
}