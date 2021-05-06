
confirm('Travel+ will access your location for better targeting!');

// var welcoming=alert('What about knowing each other more?');

// var firstName=prompt('What is your first name?');

// var sureName=prompt('Your surename?');

// alert('Welcome'+" "+firstName+" "+sureName);

var destination=prompt('Your travel destination?(europe, asia, africa)');

while (destination !== 'europe' && destination !== 'asia' && destination !== 'africa') {destination= prompt('Please choose one of them: (europe, asia, africa)');}

if(destination=="europe"){alert('Congratulations!!.. You got a flight ticket voucher_code: Euro2021');}

else if (destination=="asia"){alert('Congratulations!!.. You got a flight ticket voucher_code: Asia2021');}

else if(destination=='africa'){alert('Congratulations!!.. You got a flight ticket voucher_code: Africa2021');}


var rate = prompt('Rate us please!..(1-5)');

if (rate > 5) {
  rate = 5;
}

for (var i = 0; i < rate; i++) {

  document.write('<img src="1star.jpg" width="100px">');
}


// var age=prompt('How old are you?')

// if (age>=18) {alert('Welcome to Travel+, we wish you a useful tour!');  
// }
// else {alert('Ops!!..you are less than 18 and you will not be able to continue browsing!');}

// var emailAddress=prompt('Finally could you please provide us with your email, so we can keep in touch about what is new in our website!');