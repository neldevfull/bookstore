export default class FakePage {
    constructor(html) {
        this.html = html;
    }

    run() {
        this.ran = true;
    }
}

export class ProductTest extends FakePage {}
export class AboutTest extends FakePage {}