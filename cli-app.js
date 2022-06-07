"use strict";
//creating prompt-sync for using prompt - input 
const ps = require("prompt-sync");
const prompt = ps();

let comm = prompt("Type 'start' to start the 'Dalida's iPhone Store'CLI app: ");
let basket = [];
let finalPrice = 0;
const commands = {
    0: 'Exit',
    1: 'See the products',
    2: 'See my busket',
    3: 'Add a product to basket',
    4: 'Delete a product from basket',
    5: 'See the final price'
}
let products = ['iPhone 11 64gb', 'iPhone 11 128gb', 'iPhone 11 Pro 64gb', 'iPhone 11 Pro 128gb', 'iPhone 11 Pro Max 64gb', 'iPhone 11 Pro Max 128gb', 'iPhone 12 64gb', 'iPhone 12 128gb', 'iPhone 12 Pro 128gb', 'iPhone 12 Pro 256gb', 'iPhone 12 Pro Max 128gb', 'iPhone 12 Pro Max 256gb'];
const prices = {
    'iPhone 11 64gb': 269600,
    'iPhone 11 128gb': 299900,
    'iPhone 11 Pro 64gb': 328800,
    'iPhone 11 Pro 128gb': 338900,
    'iPhone 11 Pro Max 64gb': 399600,
    'iPhone 11 Pro Max 128gb': 400600,
    'iPhone 12 64gb': 420500,
    'iPhone 12 128gb': 454990,
    'iPhone 12 Pro 128gb': 550000,
    'iPhone 12 Pro 256gb': 555800,
    'iPhone 12 Pro Max 128gb': 615800,
    'iPhone 12 Pro Max 256gb': 622550,
}
const printAllComm = () => {
    for (const [key, value] of Object.entries(commands)) {
        console.log(`${key} - ${value}`);
    }
}
const takeInput = () => {
    comm = prompt("Choose the command: ");
}
const pusto = function () {
    console.log();
}
const printProducts = function () {
    for(let i = 1;i <= products.length;i++){
        console.log(`${i} - ${products[i-1]}`)
    }
}
const printBasketProd = function () {
    for(let i = 1;i <= basket.length;i++){
        console.log(`${i} - ${basket[i-1]}`)
    }
}

while (comm != '0') {
    printAllComm();
    takeInput();
    if (comm === '1') {
        printProducts();
        pusto();
    } else if (comm === '2'){
        console.log(basket);
        pusto();
    } else if (comm === '3'){
        printProducts();
        let indexOfProduct = prompt("Choose your product id(start from 1): ");
        basket.push(products[indexOfProduct-1]);
        pusto();
    } else if (comm === '4') {
        pusto();
        printBasketProd();
        pusto();
        let indexOfDeleting = prompt("Choose your product id to delete(start from 1): ");
        const a = basket[indexOfDeleting-1];
        delete basket[indexOfDeleting-1];
        console.log(`${a} was successfully deleted.`);
        basket = basket.filter(function(x) {
            return x !== undefined;
       });
        pusto();
    } else if (comm === '5') {
        for(let i = 0;i < basket.length;i++) {
            finalPrice += prices[basket[i]];
        }
        pusto();
        console.log(`Your final price is ${finalPrice}tg.`);
        finalPrice = 0;
        pusto();
    }
}