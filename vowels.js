const userInput = require('./userInput')

exports.performVowelCount = function() {
    const string = userInput.getPromptedInput('Please enter a string:');
    const answer = countVowels(string);

    console.log('The vowel counts are:');
    for (let vowel in answer) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
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