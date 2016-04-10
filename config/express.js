var express    = require("express");
var load       = require("express-load");
var bodyParser = require("body-parser");

module.exports = function() {
    var app = express();

    // Config views
    app.set("view engine", "ejs");
    app.set("views", "./app/views");

    // Middlewares
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // Load routes and infra
    load("routes", {cwd: "app"})
        .then("infra")
        .into(app);

    return app;
}