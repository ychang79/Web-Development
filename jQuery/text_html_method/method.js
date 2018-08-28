//change text content
//$("h1").text("new texxt");


//change HTML content
//$("ul").html("<li>corgi</li><li>husky</li><li>new li</li>");
//$("li").html("<a href='https://www.google.com'>click google</a>");

//change all src attr
//$("img").attr("src", "https://images.unsplash.com/photo-1535089894977-83d4c8854f62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e70b451b32ef8730ad0620338ff4e49&auto=format&fit=crop&w=754&q=80")
//change first src attr
//$("img:first-of-type").attr("src", "https://images.unsplash.com/photo-1535089894977-83d4c8854f62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e70b451b32ef8730ad0620338ff4e49&auto=format&fit=crop&w=754&q=80");
//change last src attr
$("img").last().attr("src", "https://images.unsplash.com/photo-1535089894977-83d4c8854f62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e70b451b32ef8730ad0620338ff4e49&auto=format&fit=crop&w=754&q=80")


//change type attr
//$("input").attr("type", "text");

//change value
$("input").val("test this value");

$("select").val("sms");


//add class to h1
$("h1").addClass("correct");

//remove class to h1
$("h1").removeClass("correct");

//add class to all li
$("li").addClass("correct");
//$("li").addClass("wrong");
//$("li").toggleClass("correct");
$("li").first().toggleClass("done");


//click event method