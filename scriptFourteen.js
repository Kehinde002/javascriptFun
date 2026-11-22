let rightTriangle = "";
let size = 4;
for(let row = 1; row <=size; row++){
	for(let column =1; column <= size - row +1; column++){
		rightTriangle += "#";
	}
		rightTriangle += "\n";
}
console.log(rightTriangle);
	
