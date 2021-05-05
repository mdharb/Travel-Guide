alert("*Our website is welcoming backpackers around the world*");

alert("- Please let us know you better in order to get a better experience!");

confirm("Do you mind if we access you location?");

var destination = prompt("Where is your travel destination,(europe, asia, or africa)");


if (destination == 'europe') {
  document.write('<a href="https://travel.usnews.com/rankings/best-europe-vacations/">europe</a>');
}

else if (destination == 'asia') {
  document.write('<a href="https://travel.usnews.com/rankings/best-asian-vacations/">asia</a>');
}

else if (destination == 'africa') {
  document.write('<a href="https://travel.usnews.com/rankings/best-african-vacations/">asia</a>');
}

else{document.write('<p><h1>SORRY!!</h1></p>')}


