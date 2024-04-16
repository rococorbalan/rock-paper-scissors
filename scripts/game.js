

const displayPlayChoice = document.querySelector("#player");
const displayCompChoice = document.querySelector("#computer");

const playerSection = document.querySelector("#player-sec")
const computerSection = document.querySelector("#computer-sec")


const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const roundResult = document.querySelector("#result")

const gameOver = document.querySelector("#game-over")
const choice = document.querySelector("#choice")

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



function playRound() {

        let computerChoice = getComputerChoice();

        switch (checkWinner(playerChoice, computerChoice)) {
            case true:
                roundResult.textContent = "Player wins! 👈"
                playerPoints = playerPoints + 1;
                playerScore.textContent = "Player Score: " + playerPoints;
                break;
            case false:
                roundResult.textContent = "Computer wins! 👉"
                computerPoints = computerPoints +1;
                computerScore.textContent = "Computer Score: " + computerPoints;
                break;
            case "tie":
                roundResult.textContent = "Tie! 🤝"
                break;
        }
}

function pointCheck(playerPoints, computerPoints){

    if (playerPoints === 5) {

        endScreen("player");

        playerPoints = 0;
        computerPoints = 0;

        playerScore.textContent = "Player Score: " + playerPoints;
        computerScore.textContent = "Computer Score: " + computerPoints;
    } else if (computerPoints === 5) {

        endScreen("computer");

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

function endScreen(winner) {

    let playAgain = document.createElement("button");
    playAgain.textContent = "Play again!"
    playAgain.style.cssText = "font-size: 32px;width: 300px;height: 100px";
    playAgain.addEventListener("click", () => {
        playAgain.remove();
        restartGame();
    });

    hideElements();
    gameOver.style.cssText = 'display: flex; text-align: center';
    
    if (winner === "player"){
        gameOver.textContent = "You Win! 🙌" 
    }
    else if (winner === "computer"){
        gameOver.textContent = "The computer Wins! 👎"
    }
    choice.appendChild(playAgain);
}

function hideElements() {
    playerSection.style.display = 'none';
    computerSection.style.display = 'none';
    roundResult.style.display = 'none';

    buttons.forEach((button) => {
        button.style.display = 'none';
    });
}


function restartGame() {
    playerSection.style.display = 'flex';
    computerSection.style.display = 'flex';
    roundResult.style.display = 'flex'

    buttons.forEach((button) => {
        button.style.display = 'flex';
    });

    gameOver.style.display = 'none';
}