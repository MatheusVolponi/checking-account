class Employee {
    constructor(name, salary, document) {
        this._name = name;
        this._salary = salary;
        this._document = document;
        
        this._bonus = 1;
        this._password;
    }

    createPassword(password) {
        this._password = password;
    }

    authenticate(password) {
        return password == this._password;
    }
}

export { Employee };