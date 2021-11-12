const readline = require('readline-sync');

const NUMBER_MODE = '1';
const VOWEL_MODE = '2';

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!\n==============================');
}

function getPromptedInput(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
}

function getNumberInputWithPrompt(prompt) {
    let input;
    do {
        input = +getPromptedInput(prompt);
    } while (isNaN(input));
    return input;
}

function getCalculationMode() {
    console.log('Which calculator mode do you want?');
    return getPromptedInput(`\ ${NUMBER_MODE}) Arithmetic ${VOWEL_MODE}) Vowel counting`);
}

function getOperator() {
    return getPromptedInput('Please enter the operator:');
}

function getNArray(operator) {
    const iterations = getNumberInputWithPrompt(`How many numbers do you want to ${operator}?`);
    let operands = new Array(iterations);
    for (let i = 0; i < iterations; i++) {
        operands[i] = getNumberInputWithPrompt(`Please enter number ${i + 1}:`);
    }
    return operands;
}

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

function countVowels(string) {
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of string) {
        const upperChar = char.toUpperCase();
        if (counts.hasOwnProperty(upperChar)) {
            counts[upperChar]++;
        }
    }
    return counts;
}

function performOneArithmeticCalculation() {
    const operator = getOperator();
    const operands = getNArray(operator);
    const answer = calculateAnswer(operator, operands);
    console.log(`\nThe answer is ${answer}`);
}

function performVowelCount() {
    const string = getPromptedInput('Please enter a string:');
    const answer = countVowels(string);

    console.log('The vowel counts are:');
    for (let vowel in answer) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
}

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === NUMBER_MODE) {
        performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_MODE) {
        performVowelCount();
    }
}

