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

let usuario = 0;
let computadora = 0;

function playRound (playerSelection) {
    
    computerSelection = getComputerChoice();
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        //return("You win, " + playerSelection + " beats " + computerSelection);
        return "user";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        //console.log("You win, " + playerSelection + " beats " + computerSelection);
        //return("You win, " + playerSelection + " beats " + computerSelection);
        return "user";
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        //console.log("You win, " + playerSelection + " beats " + computerSelection);
        //return("You win, " + playerSelection + " beats " + computerSelection);
        return "user";
    }
    else if (playerSelection == computerSelection) {
        //console.log("Tie!");
        return ("Tie!");
    }
    else {
        //console.log("You lose, " + computerSelection + " beats " + playerSelection);
        //return("You lose, " + computerSelection + " beats " + playerSelection);
        return "pc";
    }
}

let retorno = "";

//boton para piedra
const btn1 = document.querySelector('#btn1');
const imgUser = document.querySelector('#imgUser');
//imagen de la maquina
const imgPc = document.querySelector('#imgPc');

//instrucciones
const instrucciones = document.querySelector('#instructionsPadre');
const game = document.querySelector('#game');

btn1.addEventListener('click', () => {
    retorno = playRound("ROCK");
    imgUser.setAttribute('src', 'images/rock.png');
    
    if (retorno == "user") {
        imgPc.setAttribute('src', 'images/scissor.png');
        scoreUser.textContent = parseInt(scoreUser.textContent) + 1;
        parrafo.textContent = "You win, rock beats scissor";
        if (scoreUser.textContent == 5) {
            cuerpo.removeChild(instrucciones);
            cuerpo.removeChild(game);
            parrafo.textContent = "you won five rounds, do you want to try again?";
            cuerpo.appendChild(botonFinal);
        }
    }
    else if (retorno == "Tie!") {
        imgPc.setAttribute('src', 'images/rock.png');
        parrafo.textContent = "Tie!";
    }
    else {
        imgPc.setAttribute('src', 'images/paper.png');
        scorePc.textContent = parseInt(scorePc.textContent) + 1;
        parrafo.textContent = "Computer wins, paper beats rock";
        if (scorePc.textContent == 5) {
            cuerpo.removeChild(instrucciones);
            cuerpo.removeChild(game);
            parrafo.textContent = "your opponent won five rounds, do you want to try again?";
            cuerpo.appendChild(botonFinal);
        }
    }
})

//boton para papel

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    retorno = playRound("PAPER");
    parrafo.textContent = retorno;
    imgUser.setAttribute('src', 'images/paper.png');

    if (retorno == "user") {
        imgPc.setAttribute('src', 'images/rock.png');
        scoreUser.textContent = parseInt(scoreUser.textContent) + 1;
        parrafo.textContent = "You win, paper beats rock";
        if (scoreUser.textContent == 5) {
            cuerpo.removeChild(instrucciones);
            cuerpo.removeChild(game);
            parrafo.textContent = "you won five rounds, do you want to try again?";
            cuerpo.appendChild(botonFinal);
        }
    }
    else if (retorno == "Tie!") {
        imgPc.setAttribute('src', 'images/paper.png');
        parrafo.textContent = "Tie!";
    }
    else {
        imgPc.setAttribute('src', 'images/scissor.png');
        scorePc.textContent = parseInt(scorePc.textContent) + 1;
        parrafo.textContent = "Computer wins, scissors beats paper";
        if (scorePc.textContent == 5) {
            cuerpo.removeChild(instrucciones);
            cuerpo.removeChild(game);
            parrafo.textContent = "your opponent won five rounds, do you want to try again?";
            cuerpo.appendChild(botonFinal);
        }
    }
})

//boton para tijeras
const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
    retorno = playRound("SCISSORS");
    parrafo.textContent = retorno;
    imgUser.setAttribute('src', 'images/scissor.png');

    if (retorno == "user") {
        imgPc.setAttribute('src', 'images/paper.png');
        scoreUser.textContent = parseInt(scoreUser.textContent) + 1;
        parrafo.textContent = "You win, scissors beats paper";
        if (scoreUser.textContent == 5) {
            cuerpo.removeChild(instrucciones);
            cuerpo.removeChild(game);
            parrafo.textContent = "you won five rounds, do you want to try again?";
            cuerpo.appendChild(botonFinal);
        }
    }
    else if (retorno == "Tie!") {
        imgPc.setAttribute('src', 'images/scissor.png');
        parrafo.textContent = "Tie!";
    }
    else {
        imgPc.setAttribute('src', 'images/rock.png');
        scorePc.textContent = parseInt(scorePc.textContent) + 1;
        parrafo.textContent = "Computer wins, rock beats scissors";
        if (scorePc.textContent == 5) {
            cuerpo.removeChild(instrucciones);
            cuerpo.removeChild(game);
            parrafo.textContent = "your opponent won five rounds, do you want to try again?";
            cuerpo.appendChild(botonFinal);
        }
    }
})


//div para los resultados

const results = document.createElement('div');
results.setAttribute('id', 'results');

//<p> para results

const parrafo = document.createElement('p');
results.appendChild(parrafo);
parrafo.style.fontFamily = 'DynaPuff';

const cuerpo = document.querySelector('body');
cuerpo.appendChild(results);

let scoreUser = document.querySelector('#scoreUser');
let scorePc = document.querySelector('#scorePc');

results.style.display = 'flex';
results.style.justifyContent = 'center';
results.style.marginTop = '20px';


//boton final
const botonFinal = document.createElement('button');
botonFinal.textContent = 'yes';
botonFinal.style.width = '100px'
botonFinal.style.marginLeft = '615px';
botonFinal.style.fontFamily = 'DynaPuff, cursive';

botonFinal.addEventListener('click', () => {
    location.reload();
})


