import Router from "../router";
import { FakePage, ProductTest, AboutTest }  from "./router-support";

let routes = {
    "/productslist": ProductTest,
    "/about": AboutTest
}

QUnit.module("Config.Router");

QUnit.test("runs matching route", function(assert) {
    var location = {"pathname": "/productslist"};
    var router   = new Router(location, routes);
    var page     = router.run();

    assert.equal(page.constructor, ProductTest);
    // assert.ok(page.instance.ran);
});