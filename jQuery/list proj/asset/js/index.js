//click: check off list
$("ul").on("click", "li", function(){  //for potential future li
	// //if li is gray -> turn it black
	// if( $(this).css("color") === "rgb(128, 128, 128)" ){
	// 	$(this).css({
	// 		"color": "black",
	// 		"text-decoration": "none"
	// 	})
	// }else{		//else -> turn it gray
	// 	$(this).css({
	// 		"color": "gray",
	// 		"text-decoration": "line-through"
	// 	})
	// }

	$(this).toggleClass("complete");
})


//click span to delete list -> fade and remove li
$("ul").on("click", "span",function(e){
	//do not trigger parent elm(li ul body)
	//only target span elm
	e.stopPropagation();
	//remove recent parent elm (which is li)
	$(this).parent().fadeOut(2000, function(){
		$(this).remove(); //this refers to span.parent():li
	});
	
})


//create new elm in list
$("input[type = 'text']").keypress(function(e){
	//wait until user press enter
	if(e.which === 13){
		//extract text value out of input
		var newList = $(this).val();
		//make new li in ul (including span)
		//insert text value in new li
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + newList + "</li>");
		//clear the text box after enter
		$(this).val("");
	}
})

//show and hide input when plus icon clicked
$(".fa-plus-square").on("click", function(){
	$("input[type = 'text']").fadeToggle();
})