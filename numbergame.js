var secretNumber = 4;
var stringGuess = prompt ("Guess a Number");
var guess = Number(stringGuess);

if(guess === secretNumber) {
    alert("You got it!");
}


else if(guess > secretNumber){
    alert("Too high");
}

else {
    alert("Too low");
}
