module.exports = function(app) {
    app.get("/", function(request, response) {
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
                    response.render("home/index", { list: list });
                },
                json: function() {
                    response.json(list);
                }
            });

            connect.closeConnection(connection);
        });
    });
}