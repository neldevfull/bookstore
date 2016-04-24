module.exports = function(app) {
    app.get("/promotions/form", function(request, response) {
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
                    response.render("promotions/form", { list: list });
                },
                json: function() {
                    response.json(list);
                }
            });

            connect.closeConnection(connection);
        });
    });

    app.post("/promotions", function(request, response) {
        var promotions = request.body;
        response.redirect("/promotions/form");
    });
}