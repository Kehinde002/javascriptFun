let currentPopulation = 8.32;
let growthRate = 0.0085;
let population = currentPopulation;
let doubledFlag = false;
let quadrupledFlag = false;


for(let years = 1; years <= 10; years++){
	let increase = growthRate * population;
	population += increase;
	console.log(years ," " , population, " " ,increase );

	if (population >= 2 * currentPopulation && !doubledFlag){
		console.log("Population doubled in year ",years);
		doubledFlag = true;
	}


	if (population >= 4  * currentPopulation && !quadrupled_flag){
		console.log("Population Quadrupled in year ", years);
		quadrupledFlag = true;
	}
}
