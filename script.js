/*var mark = {
    firstName:'mark',
    mass:60,
    height:1.35,
    calcBMI:function(){
     this.BMI = this.mass/this.height*this.height;
     return this.BMI;
    },

};

var john = {
    firstName:'john',
    mass:70,
    height:1.8,
    calcBMI:function(){
        this.BMI = this.mass/this.height*this.height;
        return this.BMI;
    }

};



if(mark.calcBMI() > john.calcBMI() ){
    console.log(mark.firstName+' has a BMI of '+ mark.BMI);
}else if(mark.calcBMI() == john.calcBMI()){
    console.log('both have the same BMI of '+ john.BMI);
}else{
    console.log(john.firstName + ' has a BMI of ' + john.BMI);
}

var john = ['john','smith',1990,'designer',false,'blue'];


for(var i = john.length-1; i >=0; i--){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
*/

/*var restaurantBills = {
    bills:[124,48,268,180,42],

    calcTips:function(){

        this.Tips = [];
        this.finalValues = [];

        for(var i=0; i < restaurantBills.bills.length; i++){
            var percentage;
            if(restaurantBills.bills[i] < 50){
                percentage = .2;
                  }
                else if(restaurantBills.bills[i] >= 50 && restaurantBills.bills[i] < 200){
                   percentage = .15;
                      }
                      else{
                       percentage = .1;

                          }
            this.Tips[i] = percentage*restaurantBills.bills[i];
            this.sumTips = this.Tips[i]+this.Tips[i];
            this.finalValues[i] = this.bills[i] + percentage*restaurantBills.bills[i];
            this.avgTip = (percentage*restaurantBills.bills[i] + percentage*restaurantBills.bills[i])/restaurantBills.bills.length;
            }
    }

}

restaurantBills.calcTips();

  console.log(restaurantBills);

*/

/*
  var mark = {
      bills:[77,475,110,45],
      calcAVG:function(){
          for(var i = 0; i < this.bills.length; i++){

            var percentage;
            if(mark.bills < 100){
                percentage = .2;
            }
            else if(mark.bills >= 100 && mark.bills < 300){
                percentage = .1;
            }
            else{
                percentage = .25;
            }
            this.Tip = percentage*mark.bills[i];
              this.sum = this.bills[i]+ this.bills[i];
              this.avg= this.sum/mark.bills.length;
              this.avgTip = (percentage*mark.bills[i] + percentage*mark.bills[i])/mark.bills.length;

          }
      }
  }
  function calculateAvg(tips){
      var sum = 0;
      for(var i = 0; i < mark.Tip.length; i++){
          sum = sum + mark.Tip[i];
      }
      return sum/mark.Tip.length;
  }
mark.calcAVG();


console.log(mark);

if(restaurantBills.avgTip > mark.avgTip){
    console.log("restaurant has the highest tip of "+ restaurantBills.avgTip);

}else{
    console.log("mark\`s family has the highest tip of "+ mark.avgTip);

}
*/



       /******************
        ****** Game js*/
 var scores, roundScores,activePlayer,gamePlaying;

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
     document.querySelector('.player-1-panel').classList.add('active');


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

            /*----------inheritance in objeccttss=====*/

/*var john={
    firstName:"john",
    job:"teacher",
    yearOfBirth:1999,

};
var person = function(firstName, job, yearOfBirth){
    this.firstName = firstName;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
    this.calcAge=function(){
        console.log(2019-this.yearOfBirth);
    }
}
person.prototype.lastName = "mureithi";

var mark= new person("mark","designer", 2000);
console.log(mark,mark.calcAge());
console.log( mark.lastName);
*/

        /*===========object.createe=============*/
     /*   var personProto = {
           calcAge:function(){
                console.log(2019 - this.birth);
            }
        };
        var john = Object.create(personProto);
        john.name = "john";
        john.year = 1999;
        john.job = "teacher";
        console.log(john);

        var marry = Object.create(personProto,{
            name:{value:"marry"},
            year:{value:2000},
            job:{value:"designer"}
        });
        console.log(marry);
*/

      /*==========primitives vs objects========*/
      /*variables containing primitives contain the
      data inside  the variable itself
      while variables containing objects dont contain tne
      object bue=t a refference  in memory where the object sits*/

            //objects
  /*    var a = 23;
      var b = a;
      a =  30;
      console.log(a,b);

      var obj1 ={
          age:23
      };
      var obj2 = obj1;
      obj1.age = 30;
      console.log(obj1, obj2);

        //functions

        var age = 27;
        var obj0 ={
            name:'brian',
            city:'meru'
        };

        function change(a,b){
            a=19;
            b.city="kiirua";
        }
        change(age,obj0);

        console.log(age);
        console.log(obj0.city);

*/



       //passing functions as arguments
       /*var ages=[19,23,31,42,25];

       function arrayCalc(arr, fn){
           var arrRes = [];
           for(var i = 0; i < arr.length; i++){
               arrRes.push(fn(arr[i]));

           }
           return arrRes;
       }
       function calcAge(el){
           return 50-el;
       }
       function maxHeartRate(el){
           if(el >= 18 && el <= 35){
           return Math.round(206.9 - (0.67 * el));
           }else{
               return -1;
           }
       }
       var age=arrayCalc(ages,calcAge);
       var heartrate = arrayCalc(ages,maxHeartRate);

       console.log(age);
       console.log(heartrate);
       */

       //functions returning functions

  /*
       function interViewQuestions(job){
           if(job === "teacher"){
               return function(name){
                console.log("what subject do you teach " + name);
               }
           };
       };
       var teacherq = interViewQuestions("teacher");
       teacherq('brian');

       interViewQuestions('teacher')('brian');

       function interView(job){
           if(job==='designer'){
               return function(name){
                   console.log(name + " ,what is ux designe?");
               }
           };
       };
       interView('designer')('brian');
*/

//imediatelly invoked function expressions(iife)

/*function win(){
    var number = Math.floor(Math.random()*9);

    if(number >= 5){
        console.log('winner');
    }else{
        console.log('loser');
    }
}
win();
     //now lets write its iife
    (function (){
        var number = Math.floor(Math.random()*9);

        if(number >= 5){
            console.log('winner');
        }else{
            console.log('loser');
    }

})();
*/
            //=======closure
  /*          function retirement(retirementAge){

                var a = "yrs left till retirement.";
                return function(yearOfBirth){
                    var age = 2019 - yearOfBirth;
                    console.log((retirementAge - age)+ a)
                }
            }
var retirementKe = retirement(70);
retirementKe(1999);

retirement(70)(1999);
*/
/*

(function(job){
return function(name){
    if(job == 'teacher'){

            console.log(name + ',what subject do you teach?');

    }else if(job === 'designer'){

        console.log('what is ux design '+ name);

    }else{

        console.log(name + ' ,what do you do');

    };
}
}

)('farmer')('brian');
*/

//====bind call and apply methods
/*var john={
    name:'john',
    age:26,
    job:'teacher',
    presentation:function(style, timeOfDay){
        if(style== 'formal'){
            console.log('Good '+timeOfDay +
            ', ladies and gentlemen! I\'m ' +
             this.name +',I\'m a '+this.age + ' years old '+ this.job);

        }else if(style == 'friendly'){
            console.log('Hey! whatsup I\'m '
            +this.name+' ,I\'m a '+ this.job
            +' and a I\'m a '+ this.age+ 'years old. Have a nice '+
             timeOfDay+'.');

        }
    }
};

var emily={
    name:'Emily',
    age:35,
    job:'designer',
};

john.presentation('formal','morning');

john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly=john.presentation.bind(john,'friendly');
johnFriendly('morning');

johnFriendly('night');
var emilyFormal=john.presentation.bind(emily,'formal');
emilyFormal('afternoon');

//dec arrays
var restbills = [124,48,268];
 function tipCalc(restbills){
   var tip;
  if(restbills < 50){
    tip=0.2*restbills;
  }else if(restbills >=50 && restbills<= 200){
    tip=0.15*restbills;
  }else{
    tip= 0.1*restbills;
  }
  return tip;
}
 var tot = [tipCalc(restbills[0]),tipCalc(restbills[1]),tipCalc(restbills[2])];
console.log(tot);


//
function calculateAge(birthyear){
  age=2019-birthyear;
  console.log(age);

  retirment();
}
function retirment(){
  ret= 65 - age;
  console.log("years till retirment is "+ ret);
}

calculateAge(1988);
calculateAge(1999);
*/
