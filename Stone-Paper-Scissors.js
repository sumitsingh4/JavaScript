let userScore = 0;
let compScore = 0;

let user = document.querySelector("#userScore");
let comp = document.querySelector("#compScore");

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"]
    const randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
}

const drawGame = () =>{
        // console.log("Game draw");
        msg.innerText = "Game draw!";
        msg.style.backgroundColor="green";
        msg.style.color="white";
}

const playGame = (userChoice) =>{
    // console.log(`User choice is - ${userChoice}`);
    
    const compChoice = genCompChoice();
    // console.log(`Computer choice is - ${compChoice}`);

    const showWinner = (userWin,userChoice,compChoice) =>{
       if(userWin){
        // console.log("You Win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#87F5FB";
        msg.style.color="black";
        userScore++;
        user.innerText=userScore;
       }else{
        // console.log("Computer Win");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#E00D0D";
        msg.style.color="white";
        compScore++;
        comp.innerText=compScore;
       }
    }

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
} 

choices.forEach((div)=>{
    // console.log(choice);
    div.addEventListener("click",()=>{
        const userChoice = div.getAttribute("id");
        // console.log("Choice was clicked -" , userChoice);
        playGame(userChoice);
    })
})
























