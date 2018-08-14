var p1b = document.querySelector("#p1");
var p2b = document.querySelector("#p2");
var disp1 = document.querySelector("#disp1");
var disp2 = document.querySelector("#disp2");
var res = document.querySelector("#reset");
var inp = document.querySelector("input");
var max = document.querySelector("p span") //select span inside p

var p1score = 0;
var p2score = 0;

var gameover = false;
var winningscore = 5;

p1b.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		disp1.textContent = p1score;
			if(p1score === winningscore){
				gameover = true;
				disp1.classList.add("winner");
				alert("player1 won!");
			}
	}
})

p2b.addEventListener("click",function(){
	if(!gameover){
		p2score++;
		if(p2score === winningscore){
			gameover = true;
			disp2.classList.add("winner");
			alert("PLAYER2 WON!!!");
		}
	}
	disp2.textContent = p2score;
})

// reset button
res.addEventListener("click", function(){
	alert("reseted")
	p1score = 0;
	p2score = 0;
	disp1.textContent = p1score;
	disp2.textContent = p2score;
	gameover = false;
	disp1.classList.remove("winner");
	disp2.classList.remove("winner");
})

//input max score amount
//change - respond when input value has changed
inp.addEventListener("change",function(){
	//get input value to winningscore
	winningscore = Number(inp.value);  //however this is string value
	//Number() turn winningscore into number

	//display input value
	max.textContent = winningscore;
})