function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
               (userChoice === 'scissors' && computerChoice === 'paper') || 
               (userChoice === 'paper' && computerChoice === 'rock')) {
        result = "You Win!";
    } else {
        result = "You Lose!";
    }

    document.getElementById('result-text').textContent = result;
}
