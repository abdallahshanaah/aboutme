`use strict`;
var name = prompt("what's your name");
var score = 0;
alert(" welcome " + name + " I'm happy that you're on my website ");
// console.log(name);


var isJordanian = prompt('do you think I like reading? (yes or no)').toLowerCase();
switch (isJordanian) {
    case 'Y':
    case 'y':
        alert('yes,you\'re correct');
        score++;
        break;
    case 'no':
    case 'n':
        alert('oops,no,I like reading');
        break;
}
// console.log(isJordanian);


var coffe = prompt('do you think I like my tea with sugar?');
switch (coffe) {
    case 'Y':
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
// console.log(age);

var major = prompt('do you think I like jazz').toUpperCase();
switch (major) {
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
// console.log(major);

var likeDrawing = prompt('do you think I\'m vegeterain?').toLowerCase();
switch (likeDrawing) {
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
var age = prompt('do you think I\'m more than 18').toLowerCase();
switch (likeDrawing) {
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


var cats= prompt('how many cats do tou think I have from 1-6?');

for (var index = 0; index < 4 ; index++) {
    if ( cats ==3 ){
        alert ('well done,you nailde it');
        score++;
        break;
    }
    else if (cats >=0 || cats <=2) {
        alert ('oh good,you\'re so close to the answer:)');
        cats= prompt('how many cats do you think I have from 1-6?');
    }
    else if (cats >=4 || cats <=6){
        alert ('great ' + name + 'you are close');
        cats= prompt('how many cats do tou think I have from 1-6?');
    }
    else if ( cats >=7 ) {
        alert ('oops,you\'re wrong,I\'m sorrey');
        cats= prompt('how many cats do you think I have from 1-6?');
    }
}

alert('your score' + score + ' from 7 ');


var score;
var bands= ['The doors', 'pink floyed', 'the beatles', 'ACDC' ];

var userchosse = prompt('tell me one of my favourite band ?').toLowerCase();
for(var k =0; k<5; k= k+1){

    if (userchosse === bands[k] ){
        score++;
        alert ('awww,that\'s it');
        break;
     }
    if (k===5) 
for(var f=0 ; f<5 ;f++);
alert ('no,that\'s not the answer');
        userchosse = prompt('tell me one of my favourite band ?').toLowerCase() ;
        alert('your score' + score + ' from 7 '); }