var numberSquare = 6;
var colors = generateRandomColor(numberSquare);

var squarejs = document.querySelectorAll(".square"); //select each square classes

var pickedColor = colorRandom(); //value is in "rgb(X, X, X)"
var displayColorjs = document.getElementById("displayColor");
displayColorjs.textContent = pickedColor;  //show picked color on h1 in text: rgb(X, X, X)

var msgjs = document.querySelector("#msg"); //select to change b/w correct or try again

var h1js = document.querySelector("h1");

var easyjs = document.querySelector("#easybtn");
var hardjs = document.querySelector("#hardbtn");

//Easy game mode
easyjs.addEventListener("click", function(){
	easyjs.classList.add("selected");
	hardjs.classList.remove("selected");
	//generate new 3 color
	numberSquare = 3;
	colors = generateRandomColor(numberSquare);
	//pick new random color from array then display
	pickedColor = colorRandom();
	displayColorjs.textContent = pickedColor;
	//change color of square again
	for(var i = 0; i < squarejs.length; i++){
		if(colors[i]){  //if there's color which only upto 3
			squarejs[i].style.background = colors[i];
			console.log(colors[i]);
		}else{
			squarejs[i].style.display = "none"; //disapear content
		}
		
	}
	h1js.style.background = "teal";
	console.log("******");
})

//Hard game mode
hardjs.addEventListener("click", function(){
	easyjs.classList.remove("selected");
	hardjs.classList.add("selected");
	//generate 6 colors
	numberSquare = 6;
	colors = generateRandomColor(numberSquare);
	//pick random color from array then display
	pickedColor = colorRandom();
	displayColorjs.textContent = pickedColor;
	for(var i = 0; i < squarejs.length; i++){
		squarejs[i].style.background = colors[i];
		squarejs[i].style.display = "block"; //apear content
	}
	h1js.style.background = "teal";
})

//Reset game
var resetjs = document.querySelector("#reset");  //select reset button
resetjs.addEventListener("click", function(){
	//generate all new color
	colors = generateRandomColor(numberSquare);
	//pick new random color from array then display
	pickedColor = colorRandom();
	displayColorjs.textContent = pickedColor;
	//change color of square again
	for(var i = 0; i < squarejs.length; i++){
		squarejs[i].style.background = colors[i];
		console.log(colors[i]);
	}
	//change h1 background to original
	h1js.style.background = "teal";
	resetjs.textContent = "New Color";  //change back to play again-> new color
	msgjs.textContent = ""; // change back try agin, correct!! -> nothing
	console.log("******");
})


for(var i=0; i < squarejs.length; i++){
	//add initial color to squarejs
	squarejs[i].style.background = colors[i]; //change each square array.

	//add click listeners to squarejs
	squarejs[i].addEventListener("click",function(){
		//grab clicked square
		var clickedSq = this.style.background; //value is in "rgb(X, X, X)"
		//compare pickedcolor/square
		if(clickedSq === pickedColor){
			msgjs.textContent = "Correct!!!!";
			h1js.style.background = clickedSq;  //change header background aswell
			resetjs.textContent = "Play Again??"

			changeColor(clickedSq);
		}else{
			//guess wrong
			this.style.background = "#232323";
			msgjs.textContent = "Try again";
		}
	});
}




//change square color uniform
function changeColor(color){
	//change all square to same corect color
	for(var i=0; i < squarejs.length; i++){
		squarejs[i].style.background = color;
	}
	
}

//choose correct square randomly 
function colorRandom(){
//pick random number
	var random = Math.floor(Math.random() * colors.length); //floor- chops decimal //random()-generate <1 decimal
	return colors[random]; //return colors[i]
}

//randomize color for squares
function generateRandomColor(num){
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomRGB());
	}
	//return that array
	return arr;
}

//randomize RGB
function randomRGB(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
	//"rgb("   and   ", "  and   ")" is seperate string
	//we're adding number variable(red green blue) in b/w
}