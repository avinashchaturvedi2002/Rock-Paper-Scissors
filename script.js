let gameButtons=document.querySelectorAll(".gameButton");
let msg=document.querySelector("#msg");
let compScore=document.querySelector("#compScore")
let userScore=document.querySelector("#userScore")


gameButtons.forEach((gameButton)=>{
    gameButton.addEventListener("click",()=>{
        let userChoice=gameButton.getAttribute("id");
        playgame(userChoice);
    })
})



const playgame=(userChoice)=>{
    const options=["rock","paper","scissors"]
    let compChoice=options[Math.floor(Math.random()*3)];
    let userwin=true;
    if(userChoice===compChoice)
    {
        draw();
        return;
    }
    else if(userChoice=="rock")
    {
        userwin=compChoice==="paper"?false:true;
    }
    else if(userChoice=="paper")
    {
        userwin=compChoice==="scissors"?false:true;
    }
    else if(userChoice=="scissors")
     {
            userwin=compChoice==="rock"?false:true;
     }
   
     showWinner(userChoice,compChoice,userwin);
}

let userCount=0;
let compCount=0;

const showWinner=(userChoice, compChoice, userwin)=>{

    console.log(userChoice);
    console.log(compChoice);
    if(userwin)
    {
        msg.innerText=`You won. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userCount++;
        userScore.innerText=userCount;
    }
    else
    {
        msg.innerText=`You lost. ${userChoice} was beaten by ${compChoice}`;
        msg.style.backgroundColor="red";
        compCount++;
        compScore.innerText=compCount;

    }

}

const draw=(userChoice,compChoice)=>{
    msg.innerText="Game Draw. Try again"
    msg.style.backgroundColor= "#AE847E";
}