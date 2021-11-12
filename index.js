const vowels = require('./vowels')
const userInput = require('./userInput')
const arithmetic = require('./arithmetic')

const NUMBER_MODE = '1';
const VOWEL_MODE = '2';
const EXIT_MODE = '3';

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!\n==============================');
}

function getCalculationMode() {
    console.log('Which calculator mode do you want?');
    return userInput.getPromptedInput(`\ ${NUMBER_MODE}) Arithmetic ${VOWEL_MODE}) Vowel counting ${EXIT_MODE}) Exit`);
}

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === NUMBER_MODE) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_MODE) {
        vowels.performVowelCount();
    }
    else if(calculationMode == EXIT_MODE){
        break;
    }
}

