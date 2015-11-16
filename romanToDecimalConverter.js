function convertRomanToDecimal(romanNumeral){
	var decimalNumber = 0;
	var romanNumbersCounter = {};
	var romanNumbersValues = romanNumbers();

	romanNumbersCounter = letterCounter(romanNumeral);
	console.log(romanNumbersCounter);

	for (var key in romanNumbersCounter){
		decimalNumber += romanNumbersValues[key] * romanNumbersCounter[key];
	}

	console.log(decimalNumber);
	return decimalNumber;

}


function romanNumbers(){

	return {
		I:1,
		V:5,
		X:10,
		L:50,
		C:100,
		D:500,
		M:1000
	};
}

function letterCounter(someString){
	var letterCounter = {};

	for (var i = 0; i < someString.length; i++) {

		if (someString[i] === " ") {
		} 
		else if (letterCounter[someString[i]]) {
			letterCounter[someString[i]] += 1;
		} 
		else {
			letterCounter[someString[i]] = 1;
		}


	}
	return letterCounter;

}
window.onload = function(){

	var num = prompt("Please insert a roman number");
	alert('Result in decimal is :' + convertRomanToDecimal(num));

}



