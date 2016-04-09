module.exports = function(app) {
    app.get("/products", function(request, response) {
        // Connects in PostgreSQL
        var connect     = app.infra.connectionFactory;
        var connection  = connect.openConnection();
        var productsDAO =  new app.infra.ProductsDAO(connection);

        productsDAO.listAll(function(err, results) {
            if(err) {
                return console.error("error running query", err);
            }
            response.render("products/list", { list: results.rows });
            connect.closeConnection(connection);
        });
    });

    app.get("/products/new", function(request, response) {
        response.render("products/form");
    });

    app.post("/products", function(request, response) {
        // Connects in PostgreSQL
        var connect     = app.infra.connectionFactory;
        var connection  = connect.openConnection();
        var productsDAO =  new app.infra.ProductsDAO(connection);
        // Get date forms
        var products = request.body;

        productsDAO.save(products, function(err, results) {
            if(err) {
                return console.error("error running query", err);
            }
            response.redirect("/products");
            connect.closeConnection(connection);
        });
    });
}