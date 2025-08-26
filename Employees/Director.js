import { Employee } from "./Employee.js";

class Director extends Employee {
    constructor(name, salary, document) {
        super(name, salary, document);
        this._bonus = 2;
    }
}

export { Director };