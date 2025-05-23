const prompt = require('prompt');

prompt.start();

prompt.get(['userSelection'], function (err, result){
    const user = result.userSelection.toLocaleUpperCase();
    const rand = Math.random();
    const computer = rand < 0.33 ? 'ROCK' : rand < 0.66 ? 'PAPER' : 'SCISSORS';

    console.log(`User: ${user}`);
    console.log(`Computer: ${computer}`);
    if (user === computer) {
        console.log('It\'s a tie!');
    } else if (
        (user === 'ROCK' && computer === 'SCISSORS') ||
        (user === 'PAPER' && computer === 'ROCK') ||
        (user === 'SCISSORS' && computer === 'PAPER')
    ) {
        console.log('User wins!');
    } else {
        console.log('Computer wins!');
    }
});