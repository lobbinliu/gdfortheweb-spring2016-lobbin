var gotAFish = false;



$(".getafishDiv").mouseenter(function() {

	var $fishfood = $("#fishfood").clone();
		$fishfood.appendTo("body");


		// Step 1: show the fish, change position to absolute
		// 
		$fishfood.css({"position" : "absolute"});
		$fishfood.show();


		// fishfood
		var FishFoodPath = `fishfood.png`;
		console.log(FishFoodPath);

		// Change the source attribute of the fish
		//
		$fishfood.attr("src", FishFoodPath);


		// Step 2: set up a function handler to mousemove (ie. whenever i move my mouse a function gets called)
		//
	    $(document).mousemove(function(event) {
	        $fishfood.css(
	        	{
	        		"left"	: event.clientX, 
	        		"top"	: event.clientY
	        	});   
	    });  
});

//end movement with click on the div.
$(document).bind("click",function(){
    $(document).unbind("mousemove");
    $(".food").fadeout();
});



$(".getafishDiv").mouseenter(function() {

	var $fish = $("#fish").clone();
		$fish.appendTo("body");


		// Step 1: show the fish, change position to absolute
		// 
		$fish.css({"position" : "absolute"});
		$fish.show();


		// Let's get a random fish
		//
		// 1.png ... 8.png
		//
		// 3.7 --> 3
		//
		// Math.random() --> (0 ... 1)				// () --> inclusive, [] --> exclusives
		// Math.random() * 8 --> (0 ... 7)
		// Math.random() * 8 + 1 --> (1 ... 8)
		//
		var randomFishIndex = Math.floor(Math.random() * 14) + 1;
		console.log(`Getting the fish: ${randomFishIndex}`);

		// 1.png, 2.png ... 8.png
		//
		var randomFishPath = `${randomFishIndex}.png`;
		console.log(randomFishPath);


		// Change the source attribute of the fish
		//
		$fish.attr("src", randomFishPath);


		// Step 2: set up a function handler to mousemove (ie. whenever i move my mouse a function gets called)
		//
	    $(document).mousemove(function(event) {
	        $fish.css(
	        	{
	        		"left"	: event.clientX, 
	        		"top"	: event.clientY
	        	});   
	    });  
});

//end movement with click on the div.
$(document).bind("click",function(){
    $(document).unbind("mousemove");
    // $(".image").hide();
});



// // 
// $(document).ready(showExtra);
// // var imgsArray = ["A1", "C1", "F1", "J1", "K1", "L1", "S1", "Ñ1"];

// 	function generateRandomForArray() {
//     var num = Math.floor(Math.random() * 8);
//     return num;
// }

// function generateRandom() {
//     var num = Math.floor(Math.random() * 1000);
//     return num;
// }
// function showExtra() {
//     $(".extra").append("<img src='1" + ".png'>");
//     var left = generateRandom();
//     var top = generateRandom();
//     $(".extra").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
// }


// 
$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.fish').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.fish').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
 
