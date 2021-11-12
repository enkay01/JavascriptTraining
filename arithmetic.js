const userInput = require('./userInput');
function calculateAnswer(operator, operands) {
    let answer = operands[0];
    for (let x = 1; x < operands.length; x++) {
        switch (operator){
            case '+':
                return numbers.reduce((acc, curr) => acc + curr, 0);
            case '-':
                return numbers.slice(1).reduce((acc, curr) => acc - curr, numbers[0]);
            case '*':
                return numbers.reduce((acc, curr) => acc * curr, 1);
            case '/':
                return numbers.slice(1).filter(x => x !== 0).reduce((acc, curr) => acc / curr, numbers[0]);
            default:
                throw new Error(`The operator '${operator}' is not supported`);            }
    }
    return answer;
}
function getNArray(operator) {
    const iterations = userInput.getPromptedNumberInput(`How many numbers do you want to ${operator}?`);
    let operands = new Array(iterations);
    for (let i = 0; i < iterations; i++) {
        operands[i] = userInput.getPromptedNumberInput(`Please enter number ${i + 1}:`);
    }
    return operands;
}


function getOperator() {
    return userInput.getPromptedInput('Please enter the operator:');
}


exports.performOneArithmeticCalculation = function() {
    const operator = getOperator();
    const operands = getNArray(operator);
    const answer = calculateAnswer(operator, operands);
    console.log(`\nThe answer is ${answer}`);
}