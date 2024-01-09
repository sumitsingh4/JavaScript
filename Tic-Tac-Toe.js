let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="red";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="blue";
            turnO=true;
        }
        count++;
        box.disabled=true;

        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            matchDraw();
        }
    })
})


const matchDraw = () =>{
    msg.innerText="Game was a draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame = ()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                // console.log(`Winner is ${pos1Val}`);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);





















