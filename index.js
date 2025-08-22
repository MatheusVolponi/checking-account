import { Client } from "./client.js";
import { CheckingAccount } from "./CheckingAccount.js";

const client1 = new Client("Matheus", 11111111111);

const checkingAccount1 = new CheckingAccount(1001, client1);
checkingAccount1.deposit(1000);

const client2 = new Client("Maria", 22222222222);

const checkingAccount2 = new CheckingAccount(1001, client2);
checkingAccount2.deposit(1000);

checkingAccount1.transfer(500, checkingAccount2);

console.log(checkingAccount1);
console.log(checkingAccount2);
console.log(CheckingAccount.numberOfAccounts);





