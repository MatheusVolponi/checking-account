import { Client } from "./client.js";
import { CheckingAccount } from "./CheckingAccount.js";


const client1 = new Client();
client1.name = "Matheus";
client1.document = 11111111111;

const checkingAccount1 = new CheckingAccount();
checkingAccount1.agency = 1001;
checkingAccount1.client = client1;
checkingAccount1.deposit(1000);

const client2 = new Client();
client2.name = "Maria";
client2.document = 22222222222;

const checkingAccount2 = new CheckingAccount();
checkingAccount2.agency = 1001;
checkingAccount2.client = client2;
checkingAccount2.deposit(1000);

checkingAccount1.transfer(500, checkingAccount2);

console.log(checkingAccount1);
console.log(checkingAccount2);





