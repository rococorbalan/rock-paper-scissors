playRound();

function playRound(){
    let round = 1;
    let playerPoints = 0;
    let computerPoints = 0;
    while (round <= 5) {
        round++;

        if (playerPoints === 3) {
            console.log(`The players wins 3 to ${computerPoints}`)
            break;
        }else if (computerPoints === 3) {
            console.log(`The computer wins 3 to ${playerPoints}`)
            break;
        }

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        
        console.log(`ROUND ${round-1} The player picked ${playerChoice} and the computer picked ${computerChoice}`);

        switch(checkWinner(playerChoice, computerChoice)){
            case true:
                console.log("The player wins! :)")
                playerPoints++;
                break;
            case false:
                console.log("The computer wins! :(")
                computerPoints++;
                break;
            case "tie":
                console.log("It's a tie!")
                round--;
                break;
        }
    }
}


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
    let playerWin;
    if (playerChoice === computerChoice) {
        return "tie";
    }
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper"){
                return false;
            }else if (computerChoice === "scissors"){
                return true;
            }
        case "paper":
            if (computerChoice === "scissors"){
                return false;
            }else if (computerChoice === "rock"){
                return true;
            }
        case "scissors":
            if (computerChoice === "rock"){
                return false;
            }else if (computerChoice === "paper"){
                return true;
            }
    }
}