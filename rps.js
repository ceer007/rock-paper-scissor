function getComputerSelection() {
    const choices = ['ROCK', 'PAPER', 'SCISSOR']
    return choices[Math.floor(Math.random() * choices.length)]
};

let compScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'ROCK' && playerSelection === 'SCISSOR' || 
        computerSelection === 'SCISSOR' && playerSelection === 'PAPER' || 
        computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        compScore = compScore + 1;
        return ('YOU LOSE')
    } else if (computerSelection === playerSelection) {
        return ('TIED')
    } else {
        playerScore = playerScore + 1;
        return ('YOU WIN')
    }
};

const btn = document.querySelectorAll('.player-selection');
const playerSelectionInfo = document.querySelector('.img-player');
const computerSelectionInfo = document.querySelector('.img-computer');
const info = document.querySelector('.info');


btn.forEach(function (select) {
    select.addEventListener('click', function () {
        const computerSelection = getComputerSelection();
        const playerSelection = select.id;
        const result = playRound(playerSelection, computerSelection); 
        playerSelectionInfo.setAttribute('src', 'images/' + playerSelection + '.png');
        computerSelectionInfo.setAttribute('src', 'images/' + computerSelection + '.png');
        info.textContent = result; 
        const scoreForPlayer = document.querySelector('.player');
        const scoreForComputer = document.querySelector('.computer');
        scoreForPlayer.textContent = playerScore;
        scoreForComputer.textContent = compScore;         
    })
})

