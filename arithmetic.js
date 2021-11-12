const userInput = require('./userInput');
function calculateAnswer(operator, operands) {
    let answer = operands[0];
    for (let x = 1; x < operands.length; x++) {
        switch (operator){
            case '+':
                answer += operands[x];
                break;
            case '-':
                answer -= operands[x];
                break;
            case '*':
                answer *= operands[x];
                break;
            case '/':
                answer /= operands[x];
                break;
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


function getOperator() {
    return userInput.getPromptedInput('Please enter the operator:');
}


exports.performOneArithmeticCalculation = function() {
    const operator = getOperator();
    const operands = getNArray(operator);
    const answer = calculateAnswer(operator, operands);
    console.log(`\nThe answer is ${answer}`);
}