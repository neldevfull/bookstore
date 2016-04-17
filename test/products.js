var express   = require("../config/express")();
var supertest = require("supertest")(express);

describe("#products", function() {
    it("##listing json", function(done) {
        supertest.get("/products")
            .set("Accept", "application/json")
            .expect("Content-type", /json/)
            .expect(200, done);
    });

    it("##register new product with invalid data", function(done) {
        supertest.post("/products")
            .send({title: "Node.js!", description: "New book!", price: "Hey!"})
            .expect(302, done);
    });

    it("##register new product with valid data", function(done) {
        supertest.post("/products")
            .send({title: "Node.js!", description: "New book!", price: 39.99})
            .expect(302, done);
    });
});