class Client {
    name;
    _document;

    constructor(name, document) {
        this.name = name;
        this._document = document;
    }

    get document() {
        return this._document;
    }
}

export { Client };