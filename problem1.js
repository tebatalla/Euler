var max = 1000;
var count;
var result = 0;

for (count=3;count<max;count++){
    if(count % 3 == 0 || count % 5 == 0){
        result += count;
    }
}

console.log(result);