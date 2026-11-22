let totalStones = 2300000;
let averageWeight = 2.5;
let totalYears = 20;

let totalWeight = totalStones * averageWeight;
let weightPerYear = totalWeight / totalYears;

let hoursInYear = 365 * 24;
let weightPerHour = weightPerYear/hoursInYear;

let weightPerMinute = weightPerHour/60;

console.log("total: ", totalWeight );
console.log("weight Per Year: ", weightPerYear);
console.log("weight Per Hour: ", weightPerHour );
console.log("weight Per Hour: ", weightPerHour );
console.log("weight Per Minute: ", weightPerMinute);
