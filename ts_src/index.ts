function handleAnwsen(answer: string){
    switch(answer) {
        case "1": startRegistretion(); break;
        case "2": listCustomers(); break;
        case "3": changeCustomerData(); break;
        case "4": deleteCustomer(); break;
        default: console.log("Opção invalida, tente novamente.")
    }
    console.log(answer);
} 

async function printMenu(){
    console.clear();
    console.log("Menu");
    console.log("1: Cadastrar cliente.");
    console.log("2: Ver detalhes do cliente.");
    console.log("3: Alterar dados do cliente.");
    console.log("4: Deletar cliente.");

    const answer = await rl.question("Qual opção deseja?\n");

    handleAnwsen(answer);
    setTimeout(printMenu, 3000);
}
