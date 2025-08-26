import { Account } from "./Account";

class SalaryAccount extends Account {
    constructor(client){
        super(1001, client, 100);
    }

    withdraw(value) {
        let fee = 1.01;
        return this._withdraw(value + fee);
    }
}

export { SalaryAccount }