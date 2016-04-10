var http = require("http");

var config = {
    hostname: "192.168.33.11",
    port: 3000,
    path: "/products",
    headers: {
        "Accept": "application/json"
    }
}

http.get(config, function(response) {
    console.log(response.statusCode);

    response.on("data", function(body) {
        console.log("Body: " + body);
    })
});