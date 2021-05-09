

// var welcoming=alert('What about knowing each other more?');

// var firstName=prompt('What is your first name?');

// var sureName=prompt('Your surename?');

// alert('Welcome'+" "+firstName+" "+sureName);


// if (age>=18) {alert('Welcome to Travel+, we wish you a useful tour!');  
// }
// else {alert('Ops!!..you are less than 18 and you will not be able to continue browsing!');}

// var age=prompt('How old are you?')


// if (age>=18) {alert('Welcome to Travel+, we wish you a useful tour!');  
// }
// else {alert('Ops!!..you are less than 18 and you will not be able to continue browsing!');}

// if (age>=18) {alert('Welcome to Travel+, we wish you a useful tour!');  
// }
// else {alert('Ops!!..you are less than 18 and you will not be able to continue browsing!');}


// var emailAddress=prompt('Finally could you please provide us with your email, so we can keep in touch about what is new in our website!'); 

// var age=prompt('How old are you?')

// if (age>=18) {alert('Welcome to Travel+, we wish you a useful tour!');  
// }
// else {alert('Ops!!..you are less than 18 and you will not be able to continue browsing!');}


confirm('Travel+ will access your location.');


var favDestination= function(){

var destination = prompt('Your travel destination? (europe, asia, africa)');

while (destination !== 'europe' && destination !== 'asia' && destination !== 'africa') { destination = prompt('Please choose one of these destinations: (europe, asia, africa)'); }

var result='';


if (destination == 'europe') {result= ('Congratulations!!.. You got a flight ticket voucher code: Euro2021'); }

else if (destination == 'asia') { result= ('Congratulations!!.. You got a flight ticket voucher code: Asia2021'); }

else if (destination == 'africa') { result=('Congratulations!!.. You got a flight ticket voucher code: Africa2021'); }


return result;
}

alert (favDestination());



var ourRating=function(){
var rate = prompt('Rate our service!..(1-5)');


if (rate > 5) {
  rate = 5;

}

var starResults='';

for (var i = 1; i <= rate; i++) {
 starResults += '<img src="1star.jpg" width="35px">';
}
return starResults;

}

document.write(ourRating());