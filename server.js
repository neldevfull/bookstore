var app           = require("./config/express")();
var routeProducts = require("./app/routes/products")(app);

app.listen(3000, function() {
    console.log("Server is running...");
});
