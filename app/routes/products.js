module.exports = function(app) {
    app.get("/products", function(request, response) {
        // Connects in PostgreSQL
        var connect    = app.infra.connectionFactory;
        var client     = connect.openConnection();
        var productsDB = app.infra.productsDB;

        productsDB.listAll(client, function(err, results) {
            if(err) {
                return console.error("error running query", err);
            }
            response.render("products/list", { list: results.rows });
            connect.closeConnection(client);
        });
    });
}