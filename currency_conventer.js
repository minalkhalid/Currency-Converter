import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.19,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    SAR: 0.27,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'SAR']
    },
    {
        name: 'to',
        message: "Enter from  currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'SAR']
    },
    {
        name: 'amount',
        message: "Enter your amount: ",
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let conventedAmount = baseAmount * toAmount;
console.log(conventedAmount);
