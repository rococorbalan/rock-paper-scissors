function playRound() {
    let round = 1;
    let playerPoints = 0;
    let computerPoints = 0;
    while (round <= 5) {
        round++;

        if (playerPoints === 3) {
            console.log(`The players wins 3 to ${computerPoints}`)
            break;
        } else if (computerPoints === 3) {
            console.log(`The computer wins 3 to ${playerPoints}`)
            break;
        }

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        console.log(`ROUND ${round - 1} The player picked ${playerChoice} and the 
                    computer picked ${computerChoice}`);

        switch (checkWinner(playerChoice, computerChoice)) {
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