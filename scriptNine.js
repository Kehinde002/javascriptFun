let userInput = Number(prompt("Enter  number greater than zero:  "));
let userInputTwo  = Number(prompt("Enter a number greater than zero:  "));

let tripled = userInput * userInput * userInput;
let doubled = userInputTwo * userInputTwo;

if(tripled % doubled === 0){
	console.log("tripled value of first number is a multiple of the second number doubled");
}
else{
	console.log("They are not multiple");
}



	
