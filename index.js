import { Client } from "./Account/Client.js";
import { CheckingAccount } from "./Account/CheckingAccount.js";
import { SavingsAccount } from "./Account/SavingsAccount.js";

const client1 = new Client("Matheus", 11111111111);

const checkingAccount1 = new CheckingAccount(1001, client1);
checkingAccount1.deposit(1000);
checkingAccount1.withdraw(500);

const savingsAccount1 = new SavingsAccount(1001, client1, 200);

console.log(checkingAccount1);
console.log(savingsAccount1);

