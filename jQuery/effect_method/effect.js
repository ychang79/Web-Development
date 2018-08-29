$("button").on("click", function(){

	//when click fade button slowly;
	// $(this).fadeOut(3000, function(){

	// 	//run this code after fade is COMPLETED
	// 	$("h1").css("background", "pink");

	// 	//remove from existance completely
	// 	$(this).remove();
	// });



	//fadeIn
	// $(this).fadeIn(2000, function(){
	// 	$(this).css("background", "INDIGO");
	// })



	//h1 appears with sliding effect
	//$("h1").slideDown(3000);

	//h1 disappears with sliding effect
	//$("h1").slideUp(3000);


	$("h1").slideToggle(3000);
})