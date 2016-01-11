function upsAndDowns(arr){
  var upsAndDownsArry = [];
  var up = arr[0];


  for(var i = 1; i <= arr.length -1 ; i++){

    if(up > arr[i]){
      upsAndDownsArry.push('down');
    }
    else if (up < arr[i]){
      upsAndDownsArry.push('up');
    }
    else{
        upsAndDownsArry.push('even');
    }

    up = arr[i];

  }

  return upsAndDownsArry;
}

//["down","up","down","down","up","even","up"]
var inputArr = [6,3,5,4,3,4,4,5,3,9];

console.log(upsAndDowns(inputArr));
