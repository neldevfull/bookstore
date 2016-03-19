import Router from "../router";
import { FakePage, ProductTest, AboutTest }  from "./router-support";

let routes = {
    "/productslist": ProductTest,
    "/about": AboutTest
}

QUnit.module("Config.Router");

QUnit.test("pass html to constructor", function(assert) {
    var router = new Router({pathname: "/productslist"}, routes, "<html></html>");
    var page   = router.run();

    assert.deepEqual(page.html, "<html></html>", "Success!");
});

QUnit.test("runs matching route", function(assert) {
    var router = new Router({pathname: "/productslist"}, routes);
    var page   = router.run();

    assert.equal(page.constructor, ProductTest);
    // assert.ok(page.instance.ran);
});

QUnit.test("throws error for missing route", function(assert) {
    var router = new Router({pathname: "/404"}, routes);

    assert.throws(function() {
        router.run();
    }, /\/404 is not mapped/);
});

QUnit.test("uses default handler for missing routes", function(assert) {
    var routes = {"_notFound": function notFound() {
        notFound.called = true;
    }};

    var router = new Router({pathname: "/404"}, routes);
    router.run();

    assert.ok(routes._notFound.called);
});