//click listener
// $("h1").click(function(){
// 	alert("h1 has been clicked");
// });

// $("button").click(function(){
// 	console.log("youve clicked " + $(this).text());
// });

// $("button").first().click(function(){
// 	$(this).css("background", "pink");
// 	//$("button").first().css("background", "pink");
// });

// $("button").last().click(function(){
// 	$(this).css("background", "green");
// });




//keypress()
// $("input[type='text']").keypress(function(event){
// 	//console.log(event);

// 	//if press enter key(which code:13)
// 	if(event.which === 13){
// 		alert("jus hit enter");
// 	}
// })





//on() - same as addeventlistener- specify type of event(click, dblclick,keypress)
// $("h1").on("click", function(){
// 	$(this).css("background", "pink");

// 	//$(this) selects each of matched elm per time.
// 	//$("h1") selects all elm to change.
// });

$("input[type='text']").on("keypress", function(e){

	if(e.which === 13){
		$(this).css("background", "pink");
	}
});

//hover effect using on()
$("button").on("mouseenter", function(){
	//$(this).css("fontSize", "30px");
	//$(this).css("background", "pink");

	$(this).css({
		"fontSize": "40px",
		"background": "pink"
	});
});

$("button").on("mouseleave", function(){
	//$(this).css("fontSize", "20px");
	//$(this).css("background", "none");

	$(this).css({
		"fontSize": "20px",
		"background": "lightgray"
	})
});