for(let count = 1; count <=100; count++){
	if(number % 3 == 0){
		console.log("Fizz");
	}
	else if(number % 5 == 0 && number%3 !=0){
		console.log("Buzz");
	}
	else if (number % 5 == 0 && number%3 ==0){
		console.log("Fizzbuzz");
	}
	else{
		console.log("none of the above");
	}
