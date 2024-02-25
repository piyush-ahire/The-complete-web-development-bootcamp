$("h1").css("color","red"); 


//document.querySelector("h1");
// $("h1").addClass("big-title"); //adding class
// $("h1").removeClass("big-title");  //remove class 
// $("h1").addClass("big-title margin-50"); //adding multiple classe

// $("h1").text("GoodBye"); //changing text

//$("button").html("<em>hey</em>"); // to change innerhtml



//$("a").attr("href", "https://www.yahoo.com"); //to change attribute




//Adding eventListners

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })

// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }
// using Js

//using jQuery
// $("button").click(function(){
//     $("h1").css("color","yellow");
// })

//to detect keypress
$("input").keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key);
    
})

// detect on

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "yellow");
// })




// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");


//to fadeout

// $("button").on("click", function(){
//     $("h1").fadeOut();
// }) //fadeIn

//toggle
// $("button").on("click", function(){
//     $("h1").slideToggle();
// }) //slideDown slideup

//Animate
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})


// $(document).ready(function(){
//     $("h1").css("color","red");
// }) //when you use jQuery in head tag

