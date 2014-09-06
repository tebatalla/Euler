var result = 0;
function fibonacci (prev,current) {
    // body...
	if(current % 2 == 0){
		result += current;
	}
	if(current < 4000000){

		return fibonacci(current,current+prev);

	}
	else return result;
}
console.log(fibonacci(1,2));