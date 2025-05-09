console.log("Hello! Welcome to Rock Paper Scissor");

let player1Score = 0;
let player2Score = 0;
const choices = document.querySelectorAll(".choices");

const msg = document.querySelector("#msg");

const player1S = document.querySelector("#player1Choice");
const player2S = document.querySelector("#player2Choice");

const drawGame = () => {
    console.log("The game is draw!");
    msg.innerText = "Draw! Start Again";
    msg.style.backgroundColor = "yellow";
}

const genPlayer2Choice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const displayWinner = (player1Win) => {
    if (player1Win) {
        player1Score++;
        player1S.innerText = player1Score;
        console.log("Player 1 won the round! Congratulations");
        msg.innerText = "You won!";
        msg.style.backgroundColor = "green";
    } else {
        player2Score++;
        player2S.innerText = player2Score;
        console.log("Player 2 won the round! Congratulations");
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (player1Choice) => {
    console.log("Player 1 Selected:", player1Choice);
    const player2Choice = genPlayer2Choice();
    console.log("Player 2 Selected:", player2Choice);

    if (player1Choice === player2Choice) {
        drawGame();
    }
    else {

        let player1Win = true;

        if (player1Choice === "rock") {
            player1Win = player2Choice === "paper" ? false : true;
        } else if (player1Choice === "paper") {
            player1Win = player2Choice === "rock" ? true : false;
        } else if (player1Choice === "scissor") {
            player1Win = player2Choice === "rock" ? false : true;
        } else {
            console.log("Invalid game choices!");
        }
        displayWinner(player1Win);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const player1Choice = choice.getAttribute("id");
        playGame(player1Choice);
    })
});

