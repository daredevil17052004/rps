
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let rockHand = document.getElementById("rock-hand");
let paperHand = document.getElementById("paper-hand");
let scissorHand = document.getElementById("scissor-hand")
var playerOptions = "";
var pscore = document.getElementById("playerScore");
var cscore = document.getElementById("compScore");
var compHand = document.getElementById("computer");
var won = document.getElementById("won");
var wonText = document.getElementById("wwon");
var playAgain = document.getElementById("playAgain");
var divv = document.getElementById("left-bottom")
won.style.visibility = "hidden";
playAgain.style.visibility = "hidden";
var img = document.getElementById("vs")


pscore.textContent = 0;
cscore.textContent = 0;
var p=0;
var c=0;

rock.onclick = () =>{
    rockHand.style.visibility = "visible";
    paperHand.style.visibility = "hidden";
    scissorHand.style.visibility = "hidden";
    randomise();

    playerOptions = 'rock';
    if(playerOptions === 'rock'){
        console.log(playerOptions)
        if(x === 0){
            randomise();
        }
        if (x === 1){
            c = c + 1;
            cscore.textContent = c;
        }
        if (x === 2){
            p = p + 1;
            pscore.textContent = p;
        }
        if(p===5){
            wonText.textContent = "Won";
            won.style.visibility = "visible";
            playAgain.style.visibility = "visible";
            divv.style.visibility = 'hidden';
            img.style.visibility = "hidden";
             won.style.position = 'absolute';
            won.style.top = '300px';
            
        
        }
        if(c===5){
            wonText.textContent = "Lose";
            won.style.visibility = "visible";
            playAgain.style.visibility = "visible";
            divv.style.visibility = 'hidden';
            img.style.visibility = "hidden";
             won.style.position = 'absolute';
            won.style.top = '300px';
                  
        }    
    
    }
}

paper.onclick =() => {
    rockHand.style.visibility = "hidden";
    paperHand.style.visibility = "visible";
    scissorHand.style.visibility = "hidden";
    randomise();
    playerOptions = 'paper';
    if(playerOptions === 'paper'){{
        console.log(playerOptions)
        if(x === 0){
            p = p + 1;
            pscore.textContent = p;
        }
        if(x === 1){
            randomise();
        }
        if(x === 2){
            c = c + 1;
            cscore.textContent = c;
        }
        if(p===5){
            wonText.textContent = "Won";
            won.style.visibility = "visible";
            playAgain.style.visibility = "visible";
            divv.style.visibility = 'hidden';
            img.style.visibility = "hidden";
             won.style.position = 'absolute';
            won.style.top = '300px';
           
        }
        if(c===5){
            wonText.textContent = "Lose"
            won.style.visibility = "visible";
            playAgain.style.visibility = "visible";
            divv.style.visibility = 'hidden';
            img.style.visibility = "hidden";
             won.style.position = 'absolute';
            won.style.top = '300px';
            
        }
    }}
}

scissor.onclick = () => {
    rockHand.style.visibility = "hidden";
    paperHand.style.visibility = "hidden";
    scissorHand.style.visibility = "visible";
    randomise();
    playerOptions = 'scissor';
    if(playerOptions === 'scissor'){
        console.log(playerOptions)
        if(x === 0){
            c = c + 1;
            cscore.textContent = c;
        }
        if(x === 1){
            p = p + 1;
            pscore.textContent = p;
        }
        if(x === 2){
            randomise();
        }
        if(p===5){
            wonText.textContent = "Won";
            won.style.visibility = "visible";
            playAgain.style.visibility = "visible";
            divv.style.visibility = 'hidden';
            img.style.visibility = "hidden";
             won.style.position = 'absolute';
            won.style.top = '300px';
            
        }
        if(c===5){
            wonText.textContent = "Lose";
            won.style.visibility = "visible";
            playAgain.style.visibility = "visible";
            divv.style.visibility = 'hidden';
            img.style.visibility = "hidden";
             won.style.position = 'absolute';
            won.style.top = '300px';
            
        }
    }
}




function randomise() {
    x= Math.round(Math.floor(Math.random()*3));
    if (x === 0){
        compHand.innerHTML = "<img src='https://github.com/daredevil17052004/rps/blob/main/assets/rock-hand.png?raw=true'>"
    }
    if(x === 1){
        compHand.innerHTML = "<img src='https://github.com/daredevil17052004/rps/blob/main/assets/paper-hand.png?raw=true'>"
    }
    if(x === 2){
        compHand.innerHTML = "<img src='https://github.com/daredevil17052004/rps/blob/main/assets/scissors-hand.png?raw=true'>"
    }
    console.log("sps",x);
    
}
randomise();


playAgain.onclick = () => {
    location.href="./index.html";
}