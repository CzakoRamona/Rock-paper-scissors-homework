//document.getElementById("play").addEventListener("click", function(){play(playerSelection, computerSelection)});



var rPs = ["Rock", "Paper", "Scissors"];

var playerSelection = rPs[Math.floor(Math.random() * rPs.length)];
var computerSelection = rPs[Math.floor(Math.random() * rPs.length)];

play(playerSelection, computerSelection);

function play(playerSelection, computerSelection){

    const lose = () => console.log("Player lose! " + " Computer selection: " +computerSelection + " beats " + " Player selection: "+ playerSelection + "!");
    const win = () => console.log("Player win! " + " Player selection: " +layerSelection + " beats " + " Computer selection: " + computerSelection + "!");
    const tie=()=> console.log("It's a tie!"+ " Player selection: " +playerSelection + " equal " + " Computer selection: " + computerSelection+ "!")
    if (playerSelection===computerSelection){
      return tie();
    } else if (playerSelection==="Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection==="Rock"||playerSelection==="Scissors"&&computerSelection==="Paper") {
        return win()
    } else {
        return lose() 
    }
}