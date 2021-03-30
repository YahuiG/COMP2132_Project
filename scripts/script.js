const pScoreRound = document.getElementById('pr');
const cScoreRound = document.getElementById('cr');
const pTotal = document.getElementById('pTotal');
const cTotal = document.getElementById('cTotal');

const rollDice = document.getElementById('dice-roll')
let imageAlt = ["rolled: 1", "rolled: 2", "rolled: 3", "rolled: 4", "rolled: 5", "rolled: 6"];

rollDice.addEventListener('click', throwDice)

let nClick = 0;
let maxClick = 3;

const delay = 1500;

function throwDice(){
    nClick++;
    setTimeout(function()
    {
        if(nClick == maxClick)
        {
            alert(`Game Over! Start a new game :)`);
        }
    }, delay);

    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    let dice3 = Math.floor(Math.random()*6)+1;
    let dice4 = Math.floor(Math.random()*6)+1;
    diceGameStart = false;

    document.getElementById('pd1').src = `images/${dice1}.png`;
    document.getElementById('pd2').src = `images/${dice2}.png`;
    document.getElementById('cd1').src = `images/${dice3}.png`;
    document.getElementById('cd2').src = `images/${dice4}.png`;

    document.getElementById('pd1').alt = imageAlt[dice1];
    document.getElementById('pd2').alt = imageAlt[dice2];
    document.getElementById('cd1').alt = imageAlt[dice3];
    document.getElementById('cd2').alt = imageAlt[dice4];

    if(dice1 == dice2){
        pScoreRound.innerHTML = (dice1 + dice2)*2;
    }else{
        pScoreRound.innerHTML = dice1 + dice2;
    }
    if(dice3 == dice4){
        cScoreRound.innerHTML = (dice3 + dice4)*2;
    }else{
        cScoreRound.innerHTML = dice3 + dice4;
    }

    if( dice1 == 1 || dice2 == 1){
        pScoreRound.innerHTML = 0;
    }
    if(dice3 == 1 || dice4 == 1){
        cScoreRound.innerHTML = 0;
    }

    pTotal.innerHTML = +pTotal.textContent + +pScoreRound.textContent;
    cTotal.innerHTML = +cTotal.textContent + +cScoreRound.textContent; 
    
    winner(pTotal.textContent, cTotal.textContent);
};

const message = document.getElementById('message');

function winner(pPoints, cPoints){
    if(nClick == maxClick){
        if(pPoints > cPoints){
            message.innerHTML = `You is the winner!`;
        }else if(pPoints < cPoints){
            message.innerHTML = `Computer is the winner!`;
        }else if(pPoints == cPoints){
            message.innerHTML = `We have a draw!`;
        }
    }
}

const newGameStart = document.getElementById('new-game');
newGameStart.addEventListener('click', newGame)

function newGame(){
    nClick = 0;
    cTotal.innerHTML = 0;
    pTotal.innerHTML = 0;
    pScoreRound.innerHTML = 0;
    cScoreRound.innerHTML = 0;
    message.innerHTML = "";
}

const $tabs = $('.tab');
const $howTo = $('.readme');

$howTo.hide();

$tabs.click(function(){
    $(this).next().slideToggle();
});