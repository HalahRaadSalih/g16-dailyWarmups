function canFormTriangle(a,b,c){
    // sum of any two sides greater than the third
    return a+b > c && a+c > b && c+b >a;
}

canFormTriangle(1,2,3);
canFormTriangle(5,7,11);
