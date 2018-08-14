//var li1 = document.getElementsByTagName("li")[0];

var li1 = document.querySelectorAll("li");

for(var i = 0; i < li1.length; i++){

	//hover effect (but effect stays permanent)
	li1[i].addEventListener("mouseover",function(){
		this.style.color = "pink";
	})

	//mouseout so that our message changes back when the user is done hovering
	li1[i].addEventListener("mouseout",function(){
		this.style.color = "black";
	})



	//optional
	li1[i].addEventListener("click",function(){
		this.classList.toggle("finisshed")
	})
}


