import { Account } from "./Account.js";

class SavingsAccount extends Account {
    constructor (agency, client, initialBalance) {
        super(agency, client, initialBalance);
    }

    withdraw(value) {
        let fee = 1.02;
        return this._withdraw(value + fee);
    }
}

export { SavingsAccount };