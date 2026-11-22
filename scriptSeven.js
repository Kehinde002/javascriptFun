let userInput = Number(prompt("Enter your first number:  "));
let smallest  = userInput;
let largest = userInput;

for(let count = 1 ; count <= 4; count++){
	let currentNumber = Number(prompt("Enter your first number:  "));
	if (currentNumber > largest){
		largest = currentNumber;
	}
	if(currentNumber < smallest){
		smallest = currentNumber;
	}
		
console.log("This is the largest", largest);
console.log("This is the smallest", smallest);
	

