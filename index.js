const readline = require('readline-sync');
console.log('Welcome to the calculator\n===================');


console.log('\nPlease enter the operator:');
const operator = readline.prompt();

console.log('\nPlease enter the first number:');
const firstArgument = readline.prompt();
const firstNumber = +firstArgument;

console.log('\nPlease enter the second number:');
const secondArgument = readline.prompt();
const secondNumber = +secondArgument;

let answer = 0;
//if (operator === '+') {
//    answer = firstNumber + secondNumber;
//} else if (operator === '-') {
//    answer = firstNumber - secondNumber;
//} else if (operator === '*') {
//    answer = firstNumber * secondNumber;
//} else if (operator === '/') {
//    answer = firstNumber / secondNumber;
//}

switch (operator){
    case '+':
        answer = firstNumber + secondNumber;
    break;
    case '-':
        answer = firstNumber - secondNumber;
    break;
    case '*':
        answer = firstNumber * secondNumber;
    break;
    case '/':
        answer = firstNumber / secondNumber;
    break;
}
console.log('\nThe answer is ' + answer);