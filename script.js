const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
console.log("TEXTCONTENT: " + playerScore);
const choice = buttons.forEach((button) => {
    button.addEventListener('click', () => singleRound(computerPlay(), button.id))
});

function computerPlay() {
    let rand = Math.floor(Math.random() * 3) +1;
    if (rand == 1) {
        return "SCHERE";
    } else if (rand == 2) {
        return "STEIN";
    } else {
        return "PAPIER";
    }
}

function writeText(text) {
    const score = document.querySelector("#score");

    const content = document.createElement('p');
    content.classList.add('scoreboard');
    content.textContent = text;
    score.appendChild(content);
}

function singleRound(computer, player) {
    //const score = document.querySelector('#scoreboard');
    //score.parentNode.removeChild(score);
    player = player.toUpperCase();
    console.log("Deine Wahl: " + player);
    writeText(`Du wählst: ${player}`);
    console.log("Computer wählt: " + computer);
    writeText(`computer wählt: ${computer}`);
    if (player == "SCHERE" && computer == "STEIN") {
        computerScore.textContent++;
        return "Computer wins!";
    } else if (player == "SCHERE" && computer == "PAPIER") {
        playerScore.textContent++;
        return "Player wins!";
    } else if (player == "STEIN" && computer == "SCHERE") {
        playerScore.textContent++;
        return "Player wins!";
    } else if (player == "STEIN" && computer == "PAPIER") {
        computerScore.textContent++;
        return "Computer wins!";
    } else if (player == "PAPIER" && computer == "SCHERE") {
        computerScore.textContent++;
        return "Computer wins!";
    } else if (player == "PAPIER" && computer == "STEIN") {
        playerScore.textContent++;
        return "Player wins!";
    } else {
        return "Unentschieden!";
    }
}
//let rounds = window.prompt("Wieviele Runden?");
//let playerScore = 0;
//let computerScore = 0;



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
