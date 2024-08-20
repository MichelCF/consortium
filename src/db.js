"use strict";
const CUSTOMERS = [];
function generateNewId() {
    return CUSTOMERS.length > 0 ? CUSTOMERS[CUSTOMERS.length - 1].id + 1 : 1;
}
function addCustomer(newName, newAddress, newAge) {
    let newId;
    newId = generateNewId();
    const newCustomer = { id: newId, name: newName, address: newAddress, age: newAge };
    CUSTOMERS.push(newCustomer);
    console.log(CUSTOMERS);
    return newId;
}
function listCustomers() {
    console.log(CUSTOMERS);
}
module.exports = {
    addCustomer,
    listCustomers
};
