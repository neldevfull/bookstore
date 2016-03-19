export default class Router {
    constructor(location, routes) {
        this.location = location;
        this.routes = routes;
    }

    run() {
        var pageClass = this.routes[this.location.pathname];
        var page = new pageClass("html");
        return page;
    }
}