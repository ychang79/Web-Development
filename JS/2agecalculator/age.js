// var userAge = prompt("how old are you");

// var total = (userAge * 365) + 7 * 30;

// alert(userAge + " years is roughly " + total + " days");



//creat secret number
var secretNumber = 4;
//ask user for guess
var userNumber = Number(prompt("guess is your number??"));  // Number() convert string to number
//check guess
if(userNumber === secretNumber){
	alert("you guess it right");
}else if(userNumber < secretNumber){
	alert("ur guess is loower");
}else{
	alert("ur guess is too high");
}