import { Client } from "./client.js";
import { CheckingAccount } from "./CheckingAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";

const client1 = new Client("Matheus", 11111111111);

const checkingAccount1 = new CheckingAccount(1001, client1);
checkingAccount1.deposit(1000);

const SavingsAccount1 = new SavingsAccount(200, client1, 1001);

console.log(checkingAccount1);
console.log(SavingsAccount1);





