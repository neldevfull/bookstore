var express   = require("../config/express")();
var supertest = require("supertest")(express);

describe("#products", function() {
    it("##listing json", function(done) {
        supertest.get("/products")
            .set("Accept", "application/json")
            .expect("Content-type", /json/)
            .expect(200, done);
    });
});