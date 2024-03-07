console.log(checkWinner(getPlayerChoice(), getComputerChoice()));

function getPlayerChoice(){
    let playerChoice = prompt("Choose ROCK PAPER OR SCISSORS");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors" ){
        alert(`You picked ${playerChoice}`)
        return playerChoice;
    }else {
        alert("what?")
        getPlayerChoice();
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1);
    switch(computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }

}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    }
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper"){
                return "Paper beats rock! The computer wins!";
            }else if (computerChoice === "scissors"){
                return "Rock beats Scissors! The player wins!";
            }
        case "paper":
            if (computerChoice === "scissors"){
                return "Scissors beats paper! The computer wins";
            }else if (computerChoice === "rock"){
                return "Paper beats rock! The player wins";
            }
        case "scissors":
            if (computerChoice === "rock"){
                return "Rock beats Scissors! The computer wins";
            }else if (computerChoice === "paper"){
                return "Scissors beats paper! The computer wins";
            }
    }
}