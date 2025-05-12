let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const urmsg = document.querySelector("#ur-msg");
const compmsg = document.querySelector("#comp-msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// New paragraph element to display the prompt result
const promptPara = document.querySelector("#prompt");

// Prompt for user's name
const userName = prompt("Type your Name: ");

// Set the name in the paragraph with id "prompt"
if (userName) {
    promptPara.innerText = `${userName}`;
} else {
    promptPara.innerText = "Guest";
}

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}; 
const drawGame = () => {
    // console.log("The Game was Draw");
    msg.innerText = "Game Was Draw! \n   \n Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win! ";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    urmsg.innerText = `User's choice = ${userChoice}`; 

    const compChoice = genCompChoice();

    compmsg.innerText = `Computer's choice = ${compChoice}`;

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

    if (userChoice === "rock") {
        // rock beats Scissors
        userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper"){
        // paper beats Rock
       userWin = compChoice === "rock" ? true : false;
    } else {
        // scissor beats paper 
       userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});
