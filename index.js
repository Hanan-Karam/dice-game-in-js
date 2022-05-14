//DOM Variables
const playerOneScore = document.querySelector('.score-1');
const playerTwoScore = document.querySelector('.score-2');
const playerOneCard = document.querySelector('.card-1');
const playerTwoCard = document.querySelector('.card-2');
const rollingButton = document.querySelector('#roll');
const resettingButton = document.querySelector('#reset');
const message = document.querySelector('.message');
//Variables
let player_1_score = 0;
let player_2_score = 0;
let palyer_1_turn = true;

//rolling the dice
function rollDice(){
    let randomNum = Math.floor(Math.random()*6) +1;
    console.log(randomNum)
    if(palyer_1_turn){
        player_1_score +=randomNum;
        playerOneCard.textContent = randomNum;
        playerOneScore.textContent = player_1_score;
        message.textContent = "Player 2 Turn";
        playerOneCard.classList.remove('current-player');
        playerTwoCard.classList.add('current-player');
        

    }else{
        player_2_score +=randomNum;
        playerTwoCard.textContent = randomNum;
        playerTwoScore. textContent =player_2_score;
        message.textContent = "Player 1 Turn";
        playerOneCard.classList.add('current-player');
        playerTwoCard.classList.remove('current-player');

        if(player_1_score >=20){
            message.textContent = "Player 1 Has Won 🎉🎉";
            swapButtons();
        }else if(player_2_score >=20){
            message.textContent = "Player 2 Has Won 🎉🎉";
            swapButtons();
        }
        
    }

    palyer_1_turn = !palyer_1_turn;
}


//resetting the game
function resetGame(){
    player_1_score = 0;
    player_2_score = 0;
    palyer_1_turn = true;
    playerOneScore.textContent = player_1_score;
    playerTwoScore. textContent =player_2_score;
    message.textContent = "Player 1 Turn";
    playerOneCard.textContent = "-";
    playerTwoCard.textContent = "-";
    resettingButton.style.display ="none";
    rollingButton.style.display ="block";
    playerOneCard.classList.add('current-player');
    playerTwoCard.classList.remove('current-player');
}


function swapButtons(){
    resettingButton.style.display ="block";
    rollingButton.style.display ="none";
}

rollingButton.addEventListener('click', rollDice);
resettingButton.addEventListener('click', resetGame);