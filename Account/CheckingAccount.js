import { Account } from "./Account.js";

class CheckingAccount extends Account {
    static numberOfAccounts = 0;

    constructor(agency, client) {
        super(agency, client, 0);
        CheckingAccount.numberOfAccounts++;
    }

    withdraw(value) {
        let fee = 1.1;
        return this._withdraw(value, fee);
    }
}
export { CheckingAccount };