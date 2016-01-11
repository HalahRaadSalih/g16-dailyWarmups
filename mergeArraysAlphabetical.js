function mergeArraysAlphabetical(array1, array2) {
  return array1.concat(array2).sort();
}

var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

console.log(mergeArraysAlphabetical(array1, array2));
//-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]

function bubbleSorting(array1,array2){
  var newArray = array1.concat(array2);
  var biggestItem = newArray[0];

  var temp ;
  for(var i = 0; i< newArray.length; i++){
    if(newArray[i] > newArray[i+1]){
      //swap them
      temp = newArray[i];
      newArray[i]= newArray[i+1];
      newArray[i+1] = temp;

    }
    else {
      //keep the same order and continue
    }
  }

  return newArray;
}

console.log(bubbleSorting(array1, array2));
