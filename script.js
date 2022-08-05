let hands = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice () {
    let choice = parseInt(Math.random()* 2.9);
    return hands[choice];
}

let playerSelection;
let computerSelection = "";

function getPlayerSelection () {
    let temp = "";
    do {
        temp = prompt("Choose your weapon: ");
        temp = temp.toUpperCase();
        console.log(temp);
        if (temp == "ROCK"){
            break;
        }
        else if (temp == "PAPER") {
            break;
        }
        else if (temp == "SCISSORS") {
            break;
        }
    }while (true);

    return temp;
}

function playRound (playerSelection, computerSelection) {
    
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("You win, " + playerSelection + " beats " + computerSelection);
        return("user");
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("You win, " + playerSelection + " beats " + computerSelection);
        return("user");
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("You win, " + playerSelection + " beats " + computerSelection);
        return("user");
    }
    else if (playerSelection == computerSelection) {
        console.log("Tie!");
        return ("Tie");
    }
    else {
        console.log("You lose, " + computerSelection + " beats " + playerSelection);
        return("computer");
    }
}

function game() {
    //who wins?
    let user = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);

        if (result == "user") {
            user ++;
        }
        else if (result == "computer"){
            computer ++;
        }
        else if (result == "Tie") {
            user = user + 0.5;
            computer = computer + 0.5;
        }
    }

    if (user > computer) {
        console.log("You won te game");
    }
    else if (user < computer) {
        console.log("You lost the game");
    }
    else {
        console.log("The game was tied");
    }
}

game();











