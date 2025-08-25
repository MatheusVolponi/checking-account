import { Account } from "./Account.js";

class SavingsAccount extends Account {
    constructor (agency, client, initialBalance) {
        super(agency, client, initialBalance);
    }
}

export { SavingsAccount };