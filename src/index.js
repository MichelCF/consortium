"use strict";
const db = require("./db");
const vd = require("./validate");
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
async function startRegistretion() {
    let name = "";
    let address = "";
    let age = -1;
    let id;
    do {
        name = await rl.question("Qual o nome do cliente?\n");
        if (!name)
            console.log("Nome inválido, tente novamente.");
    } while (vd.validateName(name));
    address = await rl.question("Qual o endereço do cliente?\n");
    age = await rl.question("Qual a idade do cliente?\n");
    id = await db.addCustomer(name, address, age);
    console.log("Cliente Cadastrado com Sucesso!");
    await rl.question("Pressione Enter para continua ...");
    printMenu();
}
function handleAnwsen(answer) {
    switch (answer) {
        case "1":
            startRegistretion();
            break;
        case "2":
            db.listCustomers();
            break;
        default: console.log("Opção invalida, tente novamente.");
    }
    console.log(answer);
}
async function printMenu() {
    console.clear();
    console.log("Menu");
    console.log("1: Cadastrar cliente.");
    console.log("2: Ver detalhes do cliente.");
    const answer = await rl.question("Qual opção deseja?\n");
    handleAnwsen(answer);
    setTimeout(printMenu, 3000);
}
printMenu();
