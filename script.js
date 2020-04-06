

let scores, roundScore, activePlayer, gamePlaying,newgame;

let delay = 2000;
let i;


init();

if(activePlayer===0 && activePlayer !== 1){
    document.querySelector('.btn-roll').addEventListener('click', gamePlay_1);
    document.querySelector('.btn-hold').addEventListener('click', gamePlay_2);
}



// for rolling the dice and upating current socore
function gamePlay_1(){
    if(gamePlaying) {
        if(activePlayer==0){
            // 1. Random number
            let dice1 = Math.floor(Math.random() * 6) + 1;
            let dice2 = Math.floor(Math.random() * 6) + 1;

            //2. Display the result
            //document.getElementById('dice-1').style.display = 'block';
          //  document.getElementById('dice-2').style.display = 'block';
          //  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
          //  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

            //3. Update the round score IF the rolled number was NOT a 1
            if (dice1 !== 1 && dice2 !== 1) {
                //Add score
                roundScore += dice1 + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;

            } else {
                //Next player
                alert("your turn is up you rolled 0 next player");
                setTimeout(nextPlayer,500);
            }
        }
    }
}


// computerPlay
function compPlay(){
    if(gamePlaying) {
        // 1. Random number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
      //  document.getElementById('dice-1').style.display = 'block';
      //  document.getElementById('dice-2').style.display = 'block';
      //  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
      //  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        let dice_values = [
            dice1,
            dice2
        ]
        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }
            return dice_values;
            
    }
}





// for holding and pasting score part also winning cheking part
function gamePlay_2() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
         

        // to set custom winning score. YESKO LAGI SEPERATE UI OF POP UP TYPE.
        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            //document.getElementById('dice-1').style.display = 'none';
            //document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            alert("next player's turn") ;
            nextPlayer();
        }
    }
}



function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

  //  document.getElementById('dice-1').style.display = 'none';
  //  document.getElementById('dice-2').style.display = 'none';

////////////////////////////////////////////////////////////////////
//for automation
let noOfRoll = Math.floor(Math.random() * 3) +1;

    if(activePlayer===1){
        //yield halepaxi
        function* foo(noOfRoll) {
            for(i=1;i<=noOfRoll;i++){
                let x = compPlay(); //
                    if(x[0]==1 || x[1]==1){
                    break;
                }
                yield;
            }
        }
        const itt = foo(noOfRoll);

        for(i=1;i<=noOfRoll;i++){
            setTimeout(()=>{itt.next()},delay*(i))};

        setTimeout(() => {
            gamePlay_2();  //
        }, (delay*(noOfRoll) ));
    }
}

// when new game is clicked init function is called.
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

  //  document.getElementById('dice-1').style.display = 'none';
  //  document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1'; // need to change name to name entred by user
    document.getElementById('name-1').textContent = 'computer';  // need to change name to name entred by user
    document.querySelector('.player-0-panel').classList.remove('winner'); // remove previous winner for new game
    document.querySelector('.player-1-panel').classList.remove('winner');  // remove previous winner for new game
    document.querySelector('.player-0-panel').classList.remove('active');  // remove active status from player-0
    document.querySelector('.player-1-panel').classList.remove('active');  // remove active status from player-1
    document.querySelector('.player-0-panel').classList.add('active');  ///add active status to player-0
}

/*


let scores, roundScore, activePlayer, gamePlaying,newgame;

let delay = 2000;
let i;


init();

if(activePlayer===0 && activePlayer !== 1){
    document.querySelector('.btn-roll').addEventListener('click', gamePlay_1);
    document.querySelector('.btn-hold').addEventListener('click', gamePlay_2);
}



// for rolling the dice and upating current socore
function gamePlay_1(){
    if(gamePlaying) {
        if(activePlayer==0){
            // 1. Random number
            let dice1 = Math.floor(Math.random() * 6) + 1;
            let dice2 = Math.floor(Math.random() * 6) + 1;

            //2. Display the result
            //document.getElementById('dice-1').style.display = 'block';
          //  document.getElementById('dice-2').style.display = 'block';
          //  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
          //  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

            //3. Update the round score IF the rolled number was NOT a 1
            if (dice1 !== 1 && dice2 !== 1) {
                //Add score
                roundScore += dice1 + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;

            } else {
                //Next player
                alert("your turn is up:next player");
                setTimeout(nextPlayer,500);
            }
        }
    }
}


// computerPlay
function compPlay(){
    if(gamePlaying) {
        // 1. Random number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
      //  document.getElementById('dice-1').style.display = 'block';
      //  document.getElementById('dice-2').style.display = 'block';
      //  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
      //  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        let dice_values = [
            dice1,
            dice2
        ]
        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }
            return dice_values;
            
    }
}





// for holding and pasting score part also winning cheking part
function gamePlay_2() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        alert("next player");

        // to set custom winning score. YESKO LAGI SEPERATE UI OF POP UP TYPE.
        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            //document.getElementById('dice-1').style.display = 'none';
            //document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
}



function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

  //  document.getElementById('dice-1').style.display = 'none';
  //  document.getElementById('dice-2').style.display = 'none';

////////////////////////////////////////////////////////////////////
//for automation
let noOfRoll = Math.floor(Math.random() * 3) +1;

    if(activePlayer===1){
        //yield halepaxi
        function* foo(noOfRoll) {
            for(i=1;i<=noOfRoll;i++){
                let x = compPlay(); //
                    if(x[0]==1 || x[1]==1){
                    break;
                }
                yield;
            }
        }
        const itt = foo(noOfRoll);

        for(i=1;i<=noOfRoll;i++){
            setTimeout(()=>{itt.next()},delay*(i))};

        setTimeout(() => {
            gamePlay_2();  //
        }, (delay*(noOfRoll) ));
    }
}

// when new game is clicked init function is called.
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

  //  document.getElementById('dice-1').style.display = 'none';
  //  document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1'; // need to change name to name entred by user
    document.getElementById('name-1').textContent = 'computer';  // need to change name to name entred by user
    document.querySelector('.player-0-panel').classList.remove('winner'); // remove previous winner for new game
    document.querySelector('.player-1-panel').classList.remove('winner');  // remove previous winner for new game
    document.querySelector('.player-0-panel').classList.remove('active');  // remove active status from player-0
    document.querySelector('.player-1-panel').classList.remove('active');  // remove active status from player-1
    document.querySelector('.player-0-panel').classList.add('active');  ///add active status to player-0
}

*/





       /******************
        ****** Game js*/
/* var scores, roundScores,activePlayer,gamePlaying;

init();
var lastDice;
document.querySelector('#dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
          //random no
    var dice = Math.floor(Math.random()*6)+1;
    //display results
    var diceDOM = document.querySelector('#dice');
    diceDOM.style.display = 'block'
    diceDOM.src = 'dice ' + dice + '.png';

    document.querySelector('#current-'+ activePlayer).textContent = dice;

    //update the round score if the rolled no isnt a 1

     if(dice == 6 && lastDice == 6) {
        scores[activePlayer]=0;
        document.querySelector('#score-'+ activePlayer).textContent = '0';
        nextPlayer();
     }
    else if(dice > 1){
        roundScores+=dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScores;

    }
    else{
        nextPlayer();
    }
    lastDice = dice;
}


});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer]+=roundScores;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector(".final-score").value
        if(input){
            var winningScore = input;
        } else{
            winningScore = 100;
        }
        if(scores[activePlayer] >= winningScore ){
          document.querySelector('#name-' + activePlayer).textContent='winner!';
          style();
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
            gamePlaying = false;
        }
        else{
            nextPlayer();
        }

    }


})

function nextPlayer(){
    activePlayer === 0? activePlayer=1:activePlayer=0;
    roundScores = 0;


    document.getElementById('current-0').textContent='0';
     document.getElementById('current-1').textContent='0';

     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-comp-panel').classList.add('active');


}

document.querySelector('.btn-new').addEventListener('click',function(){
    document.querySelector('#name-' + activePlayer).style.color='blue';
    init();

})
function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScores =0;
    activePlayer = 0;


document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('#name-0').textContent='player1';
document.querySelector('#name-1').textContent='player2';

}
function style(){
    document.querySelector('#name-' + activePlayer).style.color='red';

}
*/
