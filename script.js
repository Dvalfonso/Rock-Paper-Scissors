let hands = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice () {
    let choice = parseInt(Math.random()* 2.9);
    return hands[choice];
}

let playerSelection;
let computerSelection = getComputerChoice();

/*function getPlayerSelection () {
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
}*/

function playRound (playerSelection) {
    
    computerSelection = getComputerChoice();
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        //console.log("You win, " + playerSelection + " beats " + computerSelection);
        return("user");
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        //console.log("You win, " + playerSelection + " beats " + computerSelection);
        return("user");
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        //console.log("You win, " + playerSelection + " beats " + computerSelection);
        return("user");
    }
    else if (playerSelection == computerSelection) {
        //console.log("Tie!");
        return ("Tie");
    }
    else {
        //console.log("You lose, " + computerSelection + " beats " + playerSelection);
        return("computer");
    }
}

let retorno = "";

//boton para piedra
const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
    retorno = playRound("ROCK");
    parrafo.textContent = retorno;
})

//boton para papel

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    retorno = playRound("PAPER");
    parrafo.textContent = retorno;
})

//boton para tijeras

const btn3 = document.addEventListener('click', () => {
    retorno = playRound("SCISSORS");
    parrafo.textContent = retorno;
})

//div para los resultados

const results = document.createElement('div');
results.setAttribute('id', 'results');

//<p> para results

const parrafo = document.createElement('p');
results.appendChild(parrafo);
 
results.appendChild(parrafo);

const cuerpo = document.querySelector('body');
cuerpo.appendChild(results);





