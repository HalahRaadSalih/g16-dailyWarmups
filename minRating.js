function removeMinFromArray(arr){
    
    if (arr.length !== 0){
        
        // get the smallest item in an array
        var minRating = arr.reduce(function(a, b) {
           
            return Math.min(a,b);
            
        });
        
        // get index of min rating
        // remove the value from the arr
        //splice modifies the array by removing the index
        arr.splice(arr.indexOf(minRating),1);
    }
    
    
     
    return arr;
}
console.log(removeMinFromArray([1,23,1,2,4]));