dbConnection = require("../infra/dbConnection");

module.exports = function(app) {
    app.get("/products", function(request, response) {
        // Connects in PostgreSQL
        var client = dbConnection.pgConnection();

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