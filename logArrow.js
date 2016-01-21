
function logArrow(num){

	var str = '';
	while (num !== 0){
		for (var i = 1; i <= num; i++){
			str += i;    
		}
		for (var j = num -1; j > 0; j--){
			str += j;    
		}
		str +='\n';
		num --;
	}
	

	console.log(str);
}

logArrow(5);