const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const computerSchere = document.querySelector('.schere');
const computerStein = document.querySelector('.stein');
const computerPapier = document.querySelector('.papier');
const statusLog = document.querySelector('.status');
const choice = buttons.forEach((button) => {
    button.addEventListener('click', () => {
        singleRound(computerPlay(), button.id)
        if (playerScore.textContent == "5") {
            alert("Player wins!");
            playerScore.textContent = "0";
            computerScore.textContent = "0";
            computerStein.style.color = null;
            computerSchere.style.color = null;
            computerPapier.style.color = null;
            console.log("Player");
        } else if (computerScore.textContent == "5") {
            alert("Computer wins!");
            console.log("computer");
            playerScore.textContent = "0";
            computerScore.textContent = "0";
            computerStein.style.color = null;
            computerSchere.style.color = null;
            computerPapier.style.color = null;
        }
    })
});



function computerPlay() {
    computerStein.style.color = null;
    computerSchere.style.color = null;
    computerPapier.style.color = null;
    computerStein.style.border = "2px solid";
    computerSchere.style.border = "2px solid";
    computerPapier.style.border = "2px solid";
    let rand = Math.floor(Math.random() * 3) +1;
    if (rand == 1) {
        computerSchere.style.color = "green";
        computerSchere.style.border = "4px solid";
        return "SCHERE";
    } else if (rand == 2) {
        computerStein.style.color = "green";
        computerStein.style.border = "4px solid";
        return "STEIN";
    } else {
        computerPapier.style.color = "green";
        computerPapier.style.border = "4px solid";
        return "PAPIER";
    }
}

/*function writeText(text) {
    const score = document.querySelector("#score");
    const content = document.createElement('p');
    content.classList.add('scoreboard');
    content.textContent = text;
    score.appendChild(content);
}*/


computerScore.textContent = "0";
playerScore.textContent = "0";

function singleRound(computer, player) {
    //const score = document.querySelector('#scoreboard');
    //score.parentNode.removeChild(score);
    player = player.toUpperCase();
    console.log("Deine Wahl: " + player);
    console.log("Computer wählt: " + computer);
    if (player == "SCHERE" && computer == "STEIN") {
        computerScore.textContent++;
        statusLog.textContent = "Computer wins!";
    } else if (player == "SCHERE" && computer == "PAPIER") {
        playerScore.textContent++;
        statusLog.textContent = "Player wins!";
    } else if (player == "STEIN" && computer == "SCHERE") {
        playerScore.textContent++;
        statusLog.textContent = "Player wins!";
    } else if (player == "STEIN" && computer == "PAPIER") {
        computerScore.textContent++;
        statusLog.textContent = "Computer wins!";
    } else if (player == "PAPIER" && computer == "SCHERE") {
        computerScore.textContent++;
        statusLog.textContent = "Computer wins!";
    } else if (player == "PAPIER" && computer == "STEIN") {
        playerScore.textContent++;
        statusLog.textContent = "Player wins!";
    } else {
            statusLog.textContent = "Unentschieden!";
        }
}

//let rounds = window.prompt("Wieviele Runden?");
//let playerScore = 0;
//let computerScore = 0;

if (playerScore.textContent == "5") {
    alert("Player wins!");
} else if (computerScore.textContent == "5") {
    alert("Computer wins!");
}
/*for (i=0; i<3; i++) {
    let game = (singleRound(computerPlay(), choice));
    if (game == "Computer wins!") {
        computerScore++;
    } else if (game == "Player wins!") {
        playerScore++;
    }
    console.log(game);
    console.log("SCORE: " + playerScore + ":" + computerScore);
}
if (computerScore > playerScore) {
    console.log("Computer wins this Game!");
} else if (playerScore > computerScore) {
    console.log("Player wins this Game!")
} else {
    console.log("Draw!");
}*/
