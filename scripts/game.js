

const displayPlayChoice = document.querySelector("#player");
const displayCompChoice = document.querySelector("#computer");

const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")


let playerPoints = 0;
let computerPoints = 0;


const buttons = document.querySelectorAll("button");
let playerChoice;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = getPlayerChoice(button.id)
        playRound();
        const result = pointCheck(playerPoints, computerPoints);
        playerPoints = result.playerPoints;
        computerPoints = result.computerPoints;
    })
});

#round div {
    background-color: blue;
}

function playRound() {

        let computerChoice = getComputerChoice();

        switch (checkWinner(playerChoice, computerChoice)) {
            case true:
                console.log("The player wins! :)")
                playerPoints = playerPoints + 1;
                playerScore.textContent = "Player Score: " + playerPoints;
                break;
            case false:
                console.log("The computer wins! :(")
                 computerPoints = computerPoints +1;
                computerScore.textContent = "Computer Score: " + computerPoints;
                break;
            case "tie":
                console.log("It's a tie!")
                break;
        }
}

function pointCheck(playerPoints, computerPoints){

    if (playerPoints === 5) {
        console.log(`The players wins!`)
        playerPoints = 0;
        computerPoints = 0;

        playerScore.textContent = "Player Score: " + playerPoints;
        computerScore.textContent = "Computer Score: " + computerPoints;
    } else if (computerPoints === 5) {
        console.log(`The computer wins!`)
        playerPoints = 0;
        computerPoints = 0;

        playerScore.textContent = "Player Score: " + playerPoints;
        computerScore.textContent = "Computer Score: " + computerPoints;
    }
    return { playerPoints, computerPoints};
}


function getPlayerChoice(playerChoice){
    switch(playerChoice) {
        case "rock":
            displayPlayChoice.textContent = "✊"
            return "rock";
        case "paper":
            displayPlayChoice.textContent = "🖐️"
            return "paper";
        case "scissors":
            displayPlayChoice.textContent = "✌️"
            return "scissors";
    }
    
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1);
    switch(computerChoice) {
        case 1:
            computerChoice = "rock"
            displayCompChoice.textContent = "✊"
            return computerChoice;
        case 2:
            computerChoice = "paper"
            displayCompChoice.textContent = "🖐️"
            return computerChoice;
        case 3:
            computerChoice = "scissors"
            displayCompChoice.textContent = "✌️"
            return computerChoice;
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