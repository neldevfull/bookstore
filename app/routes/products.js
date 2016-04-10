module.exports = function(app) {
    app.get("/products", function(request, response) {
        // Connects in PostgreSQL
        var connect     = app.infra.connectionFactory;
        var connection  = connect.openConnection();
        var productsDAO =  new app.infra.ProductsDAO(connection);

        productsDAO.listAll(function(err, results) {
            var list = null;

            if(err) {
                return console.error("error running query", err);
            }

            list = results.rows;
            response.format({
                html: function() {
                    response.render("products/list", { list: list });
                },
                json: function() {
                    response.json(list);
                }
            });

            connect.closeConnection(connection);
        });
    });

    app.get("/products/new", function(request, response) {
        response.render("products/form", {errors: {}, product: {}});
    });

    app.post("/products", function(request, response) {
        // Connects in PostgreSQL
        var connect     = app.infra.connectionFactory;
        var connection  = connect.openConnection();
        var productsDAO =  new app.infra.ProductsDAO(connection);
        // Get date forms
        var product = request.body;

        request.assert("title", "Title is required").notEmpty();
        request.assert("price", "Format invalid").isFloat();

        var errors = request.validationErrors();

        if(errors) {
            response.format({
                html: function() {
                    response.status(400)
                        .render("products/form", {errors: errors, product: product});
                },
                json: function() {
                    response.status(400)
                        .json({errors: errors, product: product});
                }
            });
            return;
        }

        productsDAO.save(product, function(err, results) {
            if(err) {
                return console.error("error running query", err);
            }
            response.redirect("/products");
            connect.closeConnection(connection);
        });
    });
}