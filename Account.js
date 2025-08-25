class Account {
    constructor (agency, client, initialBalance) {
        this._agency = agency;
        this._client = client;
        this._balance = initialBalance;
    }

    withdraw(value) {
        let fee = 1;
        return this._withdraw(value, fee);
    }

    _withdraw(value, fee) {
        const amountWithdrawn = value * fee;

        if (this._balance >= amountWithdrawn) {
            this._balance -= amountWithdrawn;
            console.log("Withdrawal successful. New balance: ", this._balance);
            return this._balance;
        }

        if (amountWithdrawn <= 0) {
            console.log("Invalid value. Please enter a positive number for withdrawal.");
            return this._balance;
        } else {
            console.log("Insufficient funds.");
            return this._balance;
        }
    }

    deposit(value) {
        if (value > 0) {
            this._balance += value;
            console.log("Deposit successful. New balance: ", this._balance);
            return this._balance;
        } else {
            console.log("Invalid value. Please enter a positive number.");
            return this._balance;
        }
    }

    transfer(value, destinationAccount) {
        const transfer = this.withdraw(value);
        destinationAccount.deposit(transfer);
    }

    get balance() {
        return this._balance;
    }

    get client() {
        return this._client;
    }

    set client(name) {
        if (name instanceof Client) {
            return this._client = name;
        } else {
            return console.log("Invalid client. Please enter a valid client.");
        }
    }
}

export { Account };