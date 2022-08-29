const playBtn = document.getElementById('play-btn');

let wins = 0;
let ties = 0;
let losses = 0;

const choices = ['p', 'r', 's'];

function playGame () {
    const playerChoice = window.prompt('Please, write R (Rock), P (Paper), or S (Scissors).');

    const index = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[index];
    
    window.alert(`The computer chose ${computerChoice}`);

    if(playerChoice === computerChoice) {
        ties ++;
        window.alert("It's a tie!");
    } else if ( 
        (playerChoice === 'r' && computerChoice === 'p') || 
        (playerChoice === 'p' && computerChoice === 's') || 
        (playerChoice === 's' && computerChoice === 'r')
    ) {
        losses ++;
        window.alert("You've lost!");
    } else {
        wins ++;
        window.alert("You've won!");
    }

    const playAgain = window.confirm('Do you want to play again?');
    if (playAgain) {
        playGame();
    }

    window.alert(`Score stats: \nWins: ${wins} \nLosses: ${losses} \nTies: ${ties}`);

};

playGame();