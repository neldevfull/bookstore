var http   = require("http");
var assert = require("assert");

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
            assert.equal(response.statusCode, 200);
            assert.equal(response.headers["content-type"],
                "application/json; charset=utf-8");
            done();
        });
    });
});