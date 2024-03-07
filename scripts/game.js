getPlayerChoice();

function getPlayerChoice(){
    let playerChoice = prompt("Choose ROCK PAPER OR SCISSORS");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors" ){
        alert(`You picked ${playerChoice}`)
        console.log(playerChoice);
        return playerChoice;
    }else {
        alert("what?")
        console.log(playerChoice);
        getPlayerChoice();
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1);
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }

}