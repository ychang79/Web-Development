
//test if number is even;
function isEven(num){
	if(num1 % 2 == 0){
		return true;
	}else{
		return false;
	}
}



function factorial(num){
	var result=1;

	if(num > 0){
		for(var i = 1; i <= num; i++){
			result *= i;
		}
		return result;
	}else{
		return 1;
	}
	
}

//replace - to a _
function kebabToSnake(str){
	//replace(/character tolook for /g,"what character replace")
	var newStr = str.replace(/-/g,"_");  //  the /g stands for global search
	return newStr;
}






//higher order functions - pass functions to other functions
function sing(){
	console.log("twincle twincle");
	console.log("little star");
} 
//setInterval(sing, 1000);