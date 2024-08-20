type Person  = {
    id: number;
    name: string;
    address: string;
    age: number;
};

const CUSTOMERS: Person[] = [];

function generateNewId() : number{
    return CUSTOMERS.length > 0 ? CUSTOMERS[CUSTOMERS.length - 1].id + 1 : 1;
}

function addCustomer(newName: string, newAddress: string, newAge: number) : number{

    let newId: number;
    newId = generateNewId();
    const newCustomer: Person = { id: newId, name: newName, address: newAddress, age: newAge };

    CUSTOMERS.push(newCustomer);
    console.log(CUSTOMERS)
    return newId
}

function listCustomers() : void{
    console.log(CUSTOMERS);
}

module.exports = {
    addCustomer,
    listCustomers
}