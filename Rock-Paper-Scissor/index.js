
let playerScore=0;
let compScore=0;
let btns = document.querySelectorAll(".btn");


function computerMove(){
    
    // console.log(btns[0]);
    let move = Math.floor(Math.random()*3);
    // console.log(move);
    let btnClicked = btns[move];

    if(btnClicked.classList.contains("rock")){
        document.getElementById("computerMove").textContent = "ROCK";
        return "ROCK";     
    }
    else if(btnClicked.classList.contains("paper")){
        document.getElementById("computerMove").textContent = "PAPER";  
        return "PAPER";      
    }
    else if(btnClicked.classList.contains("scissors")){
        document.getElementById("computerMove").textContent = "SCISSORS";    
        return "SCISSORS";    
    }

    // console.log("hello");

}
// console.log(computerMove());

btns.forEach(btn => {
    btn.addEventListener("click", event =>{
        if(btn.classList.contains("rock")){
            document.getElementById("playerMove").textContent = "ROCK";  
            
            evaluate();
        }
        else if(btn.classList.contains("paper")){
            document.getElementById("playerMove").textContent = "PAPER"; 
              
            evaluate(); 
        }
        else if(btn.classList.contains("scissors")){
            document.getElementById("playerMove").textContent = "SCISSORS";  
            
            evaluate();    
        }        
    });
});


function evaluate(){

    
    let compMove = computerMove();
    let playerMove = document.getElementById("playerMove").textContent;
    if(compMove === playerMove){
        document.getElementById("result").textContent = "It's a Tie";
    }
    else if(compMove === "ROCK"){
        if(playerMove === "PAPER"){
            document.getElementById("result").textContent = "Player WON!";
            playerScore++;
            document.getElementById("playerScore").textContent = playerScore;
        }else{
            document.getElementById("result").textContent = "Computer WON!";
            compScore++;
            document.getElementById("computerScore").textContent = compScore;
        }
    }
    else if(compMove === "PAPER"){

        if(playerMove === "SCISSORS"){
            document.getElementById("result").textContent = "Player WON!";
            playerScore++;
            document.getElementById("playerScore").textContent = playerScore;
        }else{
            document.getElementById("result").textContent = "Computer WON!";
            compScore++;
            document.getElementById("computerScore").textContent = compScore;
        }
    }
    else if(compMove === "SCISSORS"){

        if(playerMove === "ROCK"){
            document.getElementById("result").textContent = "Player WON!";
            playerScore++;
            document.getElementById("playerScore").textContent = playerScore;
        }else{
            document.getElementById("result").textContent = "Computer WON!";
            compScore++;
            document.getElementById("computerScore").textContent = compScore;
        }
    }  
    // changeColor();

}

// function changeColor(){
//     if(compScore> playerScore){
//         // console.log(document.getElementById("computerScore").style.color);
//         document.getElementById("computerScore").style.color = "greenyellow";
//         document.getElementById("playerScore").style.color = "red";
//     }
//     else if(compScore < playerScore){
//         console.log(document.getElementById("computerScore"));
//         document.getElementById("playererScore").style.color = "greenyellow";
//         document.getElementById("computerScore").style.color = "red";
//     }
//     else{
//         console.log(document.getElementById("computerScore"));
//         document.getElementById("playererScore").style.color = "tomato";
//         document.getElementById("computerScore").style.color = "tomato";
//     }
// }



