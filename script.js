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
function singleRound(computer, player) {
    player = player.toUpperCase();
    console.log("Deine Wahl: " + player);
    console.log("Computer wählt: " + computer);
    if (player == "SCHERE" && computer == "STEIN") {
        return "Computer wins!";
    } else if (player == "SCHERE" && computer == "PAPIER") {
        return "Player wins!";
    } else if (player == "STEIN" && computer == "SCHERE") {
        return "Player wins!";
    } else if (player == "STEIN" && computer == "PAPIER") {
        return "Computer wins!";
    } else if (player == "PAPIER" && computer == "SCHERE") {
        return "Computer wins!";
    } else if (player == "PAPIER" && computer == "STEIN") {
        return "Player wins!";
    } else {
        return "Unentschieden!";
    }
}
let rounds = window.prompt("Wieviele Runden?");
let playerScore = 0;
let computerScore = 0;
for (i=0; i<rounds; i++) {
    let game = (singleRound(computerPlay(), window.prompt("Schere, Stein, Papier?")));
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
}