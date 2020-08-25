const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];

//add event listeners to buttons
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(e){
    //setup player's selection
    let playerSelection = e.target.innerText;
    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    let computerSelection = Math.random();

    //if computerSelection is less than .34, computer selects Rock
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    
    //setup a function to compare winners and return result
    let result = checkWinner(playerSelection, computerSelection);

    //output scores to the DOM
    if (result === 'Player'){
        result += ' wins!';
        //update score
        winnerScores[0]++;
    }

    if (result === 'Computer'){
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!'
    }

    //output score into Score DIV
    score.innerHTML = 'Player: [ ' + winnerScores[0]+ ' ] Computer: [ ' + winnerScores[1] + ' ]';

    //output player and computer's selections
    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}
/* varianta simpla cu array 
var rPs = ["Rock", "Paper", "Scissors"];
// We need two random variables, one for 'you'
var you = rPs[Math.floor(Math.random() * 3)];
// and one for the 'computer'
var computer = rPs[Math.floor(Math.random() * 3)];

// Now invoke function
random(you, computer);

function random(you, computer){
    if (you===computer){
         console.log ("It's a tie!");
    } else if (you==="Rock" && computer === "Scissors" || you === "Paper" && computer==="Rock"||you==="Scissors"&&computer==="Paper") {
         console.log ("You've won!");
    } else {
         console.log ("You've lost!");
    }
}
*/
/*varianta 2 mai complexa
function computerPlay() {
      const choice = ["Rock", "Paper", "Scissors"];

      return choice[Math.floor(Math.random() * choice.length)];
    }

    function play(playerSelection, computerSelection) {
    // we are storing a function into the win and lose variable.
       const lose = () => console.log('You lose! ' + computerSelection + ' beats ' + playerSelection + '!');
       const win = () => console.log('You win! ' + playerSelection + ' beats ' + computerSelection + '!');

      if (playerSelection === computerSelection) {
        return console.log("It's a draw! Try again!")
      }

      if (playerSelection === "rock" && computerSelection === "Paper") {
        return lose()
      }

      if (playerSelection === "rock" && computerSelection === "Scissors") {
        return win()
      }

      if (playerSelection === "paper" && computerSelection === "Scissors") {
        return lose()
      }

      if (playerSelection === "paper" && computerSelection === "Rock") {
        return win()
      }

      if (playerSelection === "scissors" && computerSelection === "Rock") {
        return lose()
      }

      if (playerSelection === "scissors" && computerSelection === "Paper") {
        return win()
      }
    }

    function game() {
      playerSelect = 'rock';
      compSelect = computerPlay();

      console.log("Player chose " + playerSelect);
      console.log("Computer chose " + compSelect);
      // You don't need to console.log the return value of a console.log
      play(playerSelect, compSelect);
    }
    
    game();
    */
