

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

// var emailAddress=prompt('Finally could you please provide us with your email, so we can keep in touch about what is new in our website!');




confirm('Travel+ will access your location.');
var destination = prompt('Your travel destination? (europe, asia, africa)');

while (destination !== 'europe' && destination !== 'asia' && destination !== 'africa') { destination = prompt('Please choose one of these destinations: (europe, asia, africa)'); }


if (destination == "europe") { alert('Congratulations!!.. You got a flight ticket voucher code: Euro2021'); }


else if (destination == "asia") { alert('Congratulations!!.. You got a flight ticket voucher code: Asia2021'); }
else if (destination == 'africa') { alert('Congratulations!!.. You got a flight ticket voucher code: Africa2021'); }


var rate = prompt('Rate our service!..(1-5)');


if (rate > 5) {
  rate = 5;
}
else if (rate < 1) {
  rate = 1;
}

for (var i = 1; i <= rate; i++) {

  document.write('<img src="1star.jpg" width="35px">');
}