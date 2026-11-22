let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for(let count = 1; count <=5; count++){
	let userInput = Number(prompt("Enter  five digit number:  "));
	let currentNumber = Number(userInput);
	
	if(currentNumber > 0){
		positiveCount +=1;
	}
	else if(currentNumber < 0){
		negativeCount +=1;
	}
	else{
		zeroCount +=1;
	}
}

console.log("positive : " , positiveCount);
console.log("negative : " , negativeCount);
console.log("zero : " , zeroCount);
	
