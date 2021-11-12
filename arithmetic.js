const userInput = require('./userInput');
function calculateAnswer(operator, operands) {
    let answer = operands[0];
    for (let x = 1; x < operands.length; x++) {
        switch (operator){
            case '+':
                return operands.reduce((acc, curr) => acc + curr, 0);
            case '-':
                return operands.slice(1).reduce((acc, curr) => acc - curr, operands[0]);
            case '*':
                return operands.reduce((acc, curr) => acc * curr, 1);
            case '/':
                return operands.slice(1).filter(x => x !== 0).reduce((acc, curr) => acc / curr, operands[0]);
            
        }
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

function isValidOp(op){
    return ['+', '-', '*', '/'].includes(op);
}
function getOperator() {
    let op;
    do{
        op = userInput.getPromptedInput('Please enter the operator:');

    }while(!isValidOp(op) && (console.log(`The operator '${op}' is not supported`) || true))

    return op; 
}


exports.performOneArithmeticCalculation = function() {
    const operator = getOperator();
    const operands = getNArray(operator);
    const answer = calculateAnswer(operator, operands);
    console.log(`\nThe answer is ${answer}`);
}