var http = require("http");

var config = {
    hostname: "192.168.33.11",
    port: 3000,
    path: "/products",
    method: 'post',
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    }
}

var client = http.request(config, function(response) {
    console.log(response.statusCode);

    response.on("data", function(body) {
        console.log("Body: " + body);
    })
});

var product = {
    title: "", // Test error of validation
    description: "Node.js and JavaScript!",
    price: 100
};

client.end(JSON.stringify(product));