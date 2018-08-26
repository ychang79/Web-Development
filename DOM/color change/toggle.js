var button = document.querySelector("button");

var isPink = false;

button.addEventListener("click",toggle);

function toggle(){
	// if(isPink){
	// 	document.body.style.background = "white";
	// 	isPink = !isPink;
	// }else{
	// 	document.body.style.background = "pink";
	// 	isPink = !isPink;
	// }
	

	//or classlist.toggle
	document.body.classList.toggle("purp");
}