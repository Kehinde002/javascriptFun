let userInput = Number(prompt("Enter your first number:  "));
let userInputTwo = Number(prompt("Enter your second number:  "));
let userInputThree = Number(prompt("Enter your third number:  "));


let sum = userInput + userInputTwo + userInputThree;
let average = sum / 3;
let product = userInput * userInputTwo * userInputThree;

let smallest = userInput;
let largest = userInput;

if( userInputTwo < smallest){
	smallest = userInputTwo;
}
else if( userInputThree < smallest){
	smallest = userInputThree;
}
	
if( userInputTwo > largest){
	largest = userInputTwo;
}
else if( userInputThree > largest){
	largest = userInputThree;
}
	
console.log("this is the sum of the three numbers : ", sum)
console.log("this is the average of the three numbers : ", average)
console.log("this is the product of the three numbers : ", product)
console.log("this is the smallest of the three numbers : ", smallest)
console.log("this is the largest of the three numbers : ", largest)
	



