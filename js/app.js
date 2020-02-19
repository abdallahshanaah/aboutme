
'use strict';
// eslint-disable-next-line no-redeclare
var name = prompt('what\'s your name');
var score = 0;
alert(' welcome ' + name + ' I\'m happy that you\'re on my website ');
// console.log(name);
var isJordanian = prompt('do you think I like reading? (yes or no)').toLowerCase();
// eslint-disable-next-line no-unused-vars
function read1(answer1) {
  switch (answer1) {
  case 'yes':
  case 'y':
    alert('yes,you\'re correct');
    score++;
    break;
  case 'no':
  case 'n':
    alert('oops,no,I like reading');
    break;
  default:
    alert('nothing');
    break;
  }
}
read1(isJordanian);

var coffe = prompt('do you think I like my tea with sugar?').toLowerCase();
function suger(answer2) {
  switch (answer2) {
  case 'yes':
  case 'y':
    alert('no,I like it with out sugar');
    break;
  case 'no':
  case 'n':
    alert('yes,you\'re right');
    score++;
    break;
  default:
    alert('nothing !');
    break;
  }
}
suger(coffe);

var major = prompt('do you think I like jazz').toUpperCase();
function mymajor(answer3) {
  switch (answer3) {
  case 'YES':
  case 'Y':
    alert('oh yes,I like it a lot');
    score++;
    break;
  case 'NO':
  case 'N':
    alert('it is nice I like it!!');
    break;
  default:
    alert('nothing !');
    break;
  }
}
mymajor(major);

var vegeterain = prompt('do you think I\'m vegeterain?').toLowerCase();
function myfood(food) {
  switch (food) {
  case 'yes':
  case 'y':
    alert('no,i\'m not');
    break;
  case 'no':
  case 'n':
    alert('yes,you\'re right,I\'m not');
    score++;
    break;
  default:
    alert('nothing');
    break;
  }
}
myfood(vegeterain);


var age = prompt('do you think I\'m more than 18').toLowerCase();

function myage (num) {
  switch (num) {
  case 'yes':
  case 'y':
    alert('yes,right!');
    score++;
    break;
  case 'no':
  case 'n':
    alert('no,i\'m :)');
    break;
  default:
    alert('nothing');
    break;
  }
  alert('your score' + score + ' from 7 ');
}
myage(age);




var cats= prompt('how many cats do tou think I have from 1-6?');
console.log(cats);

function mycat (cats) {
  for (var index = 0; index < 4 ; index++) {
    console.log(cats);
    if ( cats ==3 ){
      alert ('well done,you nailde it');
      // score++;
      break;
    }
    else if (cats >=0 && cats <=2) {
      console.log(cats);
      alert ('oh good,you\'re so close to the answer:)');
      cats= prompt('how many cats do you think I have from 1-6?');
    }
    else if (cats >=4 && cats <=6){
      console.log(cats);
      alert ('great ' + name + 'you are close');
      cats= prompt('how many cats do tou think I have from 1-6?');
    }
    else {
      console.log(cats);
      alert ('oops,you\'re wrong,I\'m sorrey');
      cats= prompt('how many cats do you think I have from 1-6?');
    }
  }
}
mycat(cats);
alert('your score' + score + ' from 7 ');

var bands= ['the doors', 'pink floyed', 'the beatles', 'ACDC' ];

function search() {
  for(var k =0; k < 6; k++){
    var userchosse = prompt('tell me one of my favourite bands ?').toLowerCase();
    for(var f = 0 ; f < bands.length ;f++){
      if (userchosse === bands[f] ){
        score++;
        alert ('awww,that\'s it');
        k=6;
        break;
      }
    }
  }
}
search();
alert('your score' + score + ' from 7 ');
