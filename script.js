function computerPlay(){
  const choices = ['rock', 'paper', 'scissor']
  return choices[Math.floor(Math.random()*choices.length)]
};



let compScore = 0;
let playerScore = 0;

function playRound(playerPick, compPick) {
  if (computerPlay() === 'rock' && compPick === 'rock' && playerPick === 'scissor' || 
      computerPlay() === 'scissor' && compPick === 'scissor' && playerPick === 'paper' ||
      computerPlay() === 'paper' && compPick === 'paper' && playerPick === 'rock') {compScore = ++compScore;
    return(`You pick ${playerPick}, computer pick ${compPick}, You lose!!!`)}
    else if (compPick === playerPick) {return(`You pick ${playerPick}, Computer pick ${compPick}. Tied!!!`)}
    else {playerScore = ++playerScore; return(`You pick ${playerPick}, computer pick ${compPick}, You Win!!!`)}
  };
  
const playerPick = 'rock'.toLowerCase();
const compPick = computerPlay().toLowerCase();  
  
function game(){  
  for (let i = 0; i < 5; i++) {
    const playerPick = prompt('Pick Rock, Paper or Scissor').toLowerCase();
    const compPick = computerPlay().toLowerCase(); 
    console.log(playRound(playerPick, compPick))
    console.log(`Player Score = ${playerScore} & Computer Score = ${compScore}`);
  }

  if (playerScore > compScore){console.log('Player Win!!!')}
  else if (playerScore === compScore) {console.log('Tied!!!')}
  else {console.log('Computer Win!!!')};
  
}
console.log(game());