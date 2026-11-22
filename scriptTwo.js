let userInput = Number(prompt("Enter your first number:  "));
let squareOfFirstInput = userInput * userInput ;

if(userInput > 100 && squareOfFirstInput > 100){
	console.log("the number and square is greater than 100")
}
else if(userInput <  100 && squareOfFirstInput < 100){
	console.log("the number and square is not equal than 100")
}
else if(userInput === 100 || squareOfFirstInput === 100){
	console.log("the number and square is equal than 100")
}
else{
	console.log("the number and square is not equal than 100")
}

