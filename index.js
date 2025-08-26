import { Client } from "./Account/client.js";
import { Manager } from "./Employees/Manager.js";
import { Director } from "./Employees/Director.js";
import { Authenticator } from "./Authenticator.js";

const director = new Director("Matheus", 10000, 12345678900);
director.createPassword(112333);

const manager = new Manager("Carlos", 5000, 98765432100);
manager.createPassword(123456);

const client = new Client("Maria", 33333333333);
client.createPassword(1234)

const directorIsLogged = Authenticator.login(director, 112333);
const managerIsLogged = Authenticator.login(manager, 123456);
const clientIsLogged = Authenticator.login(client, 1234);

console.log(directorIsLogged);
console.log(managerIsLogged);
console.log(clientIsLogged);
