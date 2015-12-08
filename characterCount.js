function chacaterCounter(str){
    var countObj = {};
    
    for(var i = 0; i< str.length; i++){
        if(countObj[str[i]]){
            countObj[str[i]] +=1;
        }
        else{
            countObj[str[i]] = 1;
        }
    }
    
    return countObj;
}

console.log(chacaterCounter("banana"));

function allCharUnique(str){
    

    return str === removeDupes(str)
}

function removeDupes(str){
    
   var strWithoutDubes = str.split("").filter(function(letter, index, allLetters){
       // check if itis already there
       return index=== allLetters.indexOf(letter);
   });
    
    return strWithoutDubes.join("");
}

console.log(allCharUnique("hal"));