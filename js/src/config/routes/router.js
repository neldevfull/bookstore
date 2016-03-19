export default class Router {
    constructor(location, routes) {
        this.location = location;
        this.routes = routes;

        console.log("location: "+location+" routes: "+routes);
    }

    run() {
        console.log("Run!");
    }
}