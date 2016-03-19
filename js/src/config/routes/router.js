export default class Router {
    constructor(location, routes, html) {
        this.location = location;
        this.routes   = routes;
        this.html     = html;
    }

    run() {
        var pageClass = this.routes[this.location.pathname];

        if(!pageClass)
            return (this.routes._notFound || this.defaultNotFoundHandler)(this.location);

        var page = new pageClass(this.html);
        page.run();
        return page;
    }

    defaultNotFoundHandler(location) {
        throw new Error(`${location.pathname} is not mapped`);
    }
}