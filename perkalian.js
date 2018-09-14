var perkalian = function(x,y){
    let min = findMin(x,y);
    let retNum = 0;
    for(let mul = 0; mul < min[0]; mul++){
        retNum += min[1];
    }
    return retNum;
}

var findMin = function(x,y){
    if(x <= y){
        return [x,y];
    }else{
        return [y,x];
    }
}
console.log(perkalian(0,2));
console.log(perkalian(1,14));
console.log(perkalian(12,6));