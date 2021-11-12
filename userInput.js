const readline = require('readline-sync');

exports.getPromptedNumberInput = function(prompt) {
    let input;
    do {
        input = + exports.getPromptedInput(prompt);
    } while (isNaN(input));
    return input;
}
exports.getPromptedInput = function(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
}