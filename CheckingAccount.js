class CheckingAccount {
    agency;
    client;

    _balance = 0;

    withdraw(value) {
        if (value <= 0) {
            console.log("Invalid value. Please enter a positive number for withdrawal.");
            return this._balance;
        }

        if (this._balance >= value) {
            this._balance -= value;
            console.log("Withdrawal successful. New balance: ", this._balance);
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
}

export { CheckingAccount };