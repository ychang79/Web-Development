// var todo = [];



// //ask again
// while(input !== "quit"){

// 	var input = prompt("what wuold you like to do");

// 	if (input === "list"){
// 			todo.forEach(function(x, ind){   //takes upto 3 argument
// 				console.log(ind + ": " + x);
// 			})
// 	}else if(input === "new"){   
// 		//ask new todo
// 		var newTodo = prompt("enter new todo")
// 		//add new todo
// 		todo.push(newTodo);
// 	}else if(input === "delete"){
// 		var deleteIndex = prompt("which one to deleTE");
// 		todo.splice(deleteIndex, 1); //splice(index to delete, delete amount) - delete array element
// 		//u gotta specify index.
// 	}

// }
// console.log("ok you quit");






// function printReverse(arr){
// 	for(var i = arr.length - 1; i >= 0; i--){
// 		console.log(arr[i]);
// 	}
// }

// printReverse([3,6,2,5]);


//check if all element in array is same value
// function isUniform(arr){
// 	var firstEl = arr[0];

// 	for(var i = 1; i < arr.length; i++){
// 		if (firstEl !== arr[i]) {
// 			return false
// 		}
// 	}
// 	return true;
// }


// function sumArray(arr){
// 	var sums = 0;

// 	arr.forEach(function(element){
// 		sums += element;
// 	})

// 	return sums;
// }


//return max number
function max(arr){
	var max = arr[0];

	for(var i = 1; i < arr.length; i++){
		if( arr[i] > max){
			max = arr[i]
		}
	}

	return max;
}
