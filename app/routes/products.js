module.exports = function(app) {
    app.get("/products", function(request, response) {
        // Connects in PostgreSQL
        var connect    = app.infra.connectionFactory;
        var connection = connect.openConnection();
        var productsDB =  new app.infra.ProductsDAO(connection);

        productsDB.listAll(function(err, results) {
            if(err) {
                return console.error("error running query", err);
            }
            response.render("products/list", { list: results.rows });
            connect.closeConnection(connection);
        });
    });
}