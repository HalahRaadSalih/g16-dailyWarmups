function max(arryOfNums){
	var maxNum = Number.NEGATIVE_INFINITY;

	for (var i= 0; i < arryOfNums.length; i++){
		if(arryOfNums[i] > maxNum){
			maxNum = arryOfNums[i];
		}

	}

	return maxNum;
}


function maxThree(arr){
	var maxThreeArr = [];
 
	for(var i =0; i< 4; i++){
		var topMax = max(arr);
		maxThreeArr.push(topMax);
		var indexOfTopMax = arr.indexOf(topMax);
		arr.splice(indexOfTopMax,1);

	}


	return maxThreeArr;

}


function randomMax(arr, n){
	var arrayOfMax = [];

	if (arr.length < n){

		arrayOfMax = arr
	}

	else{
		for(var i = 0; i < n; i++){
			var topMax = max(arr);
			arrayOfMax.push(topMax);
			var indexOfTopMax = arr.indexOf(topMax);
			arr.splice(indexOfTopMax,1);
		}
	}

	return arrayOfMax;
}
console.log(randomMax([1,2,3,4,5,6,7,8,9,-10, 50, 99, Number.POSITIVE_INFINITY], 5));



