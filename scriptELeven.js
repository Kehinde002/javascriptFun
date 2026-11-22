let userInput = Number(prompt("Enter  five digit number:  "));
let divisor = 10000;
let result = "";

while(divisor >= 1){
let digit = userInput/1000;
divisor /= 10;
result = digit + " ";

}

console.log(result);





