
function logArrow(num){
	// str used to print on same line
	var str = '';
	// to hold number of spaces need to added to the beginning of each line
	var space = '';

	while (num !== 0){
		//concat space
		space += ' ';
		// loop from smallest to largest, contact to string
		for (var i = 1; i <= num; i++){
			str += i;    
		}
		// loop from largest to smallest, contact to string

		for (var j = num -1; j > 0; j--){
			str += j;    
		}
		// concat new line and spaces
		str +='\n' + space;

		// reduce the number to start over
		num --;
	}
	
	// log the result
	console.log(str);
}

logArrow(5);