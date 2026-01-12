let computerS=0;
let userS=0;

choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
const userScore=document.querySelector("#user-score");
const computerScore=document.querySelector("#comp-score")

const comp=()=>{

    const arr=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    
    return arr[idx];

}

const draw=()=>{
    
    msg.innerText="Game draw...play again!!"
    msg.style.backgroundColor= "#081b31";

}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userS++;
        userScore.innerText=userS;
        msg.innerText=`You Win !! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
        startConfetti();
    }
    else{
        computerS++;
        computerScore.innerText=computerS;
        msg.innerText=`You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
function startConfetti() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        ticks:150
    });
}
const playGame=(userChoice)=>{
   

    let computerChoice=comp();
    

    if(userChoice==computerChoice){
        draw();
    }
    else{
        userWin=true;

        if(userChoice==="rock"){
            userWin=computerChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissor" ? false:true;
        }
        else{
            userWin=computerChoice=="rock"?false:true;

        }
        showWinner(userWin,userChoice,computerChoice);

    }
    

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })

})