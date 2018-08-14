alert("hello");

/*
var array = [
	//obj inside array
	{
		name: "young chang",
		school: "GT",
		// nested array inside obj
		info: [23, "lexus"]
	},

	{
		name: "sohyun",
		school: "UG",
		info: [32, "civic"]
	}
];
*/


//to access "young chang"
//array[0].name

//to access array:info
//array[0].info

//to access "civic"
//array[1].info[1]



//---------
/*
var movies = [
 {
 	title:"In Brugeeeeees",
 	hasWatched: true,
 	stars:5
 },
 {
 	title:"FFrozen",
 	hasWatched: false,
 	stars:4.5
 },
 {
 	title:"MMADD MAXXZ",
 	hasWatched:true,
 	stars:4
 },
 {
 	title:"les miser",
 	hasWatched:false,
 	stars: 3.2
 }
]


movies.forEach(function(film){
	buildStrings(film);
})


function buildStrings(x){
	if(x.hasWatched){
		console.log("you have watched " + x.title + " - " + x.stars + " stars");
	}else{
		console.log("you have not watched " + x.title + " - " + x.stars + " stars");
	}
}

*/





//method tutorial

var obj = {
	name: "young chang",
	age: 45,
	freinds: ["dong", "bob"],
	//method
	mmmethod: function(x, y){
		return x + y;
	}
}

//to use method inside obj
//obj.mmmethod(4,6);  //prints 10