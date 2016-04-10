var http = require("http");

describe("#products", function() {
    it("##listing json", function(done) {
        var config = {
            hostname: "192.168.33.11",
            port: 3000,
            path: "/products",
            headers: {
                "Accept": "application/json"
            }
        };

        http.get(config, function(response) {
            response.statusCode == 200 ? console.log("Status OK") :
                console.log("Status not ok...")

            response.headers["content-type"] == "application/json; charset=utf-8" ?
                console.log("Content-type OK") : console.log("Content-type not ok...")

            done();
        });
    });
});