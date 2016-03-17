

$(function(){
alert("shooting star");

	$("div").hover(function(){
		$(this).addClass("hovered");
	});
	$("div").click(function(){
		$(this). addClass("clicked");

		var randNumber =Math.random()*800;
			$(this).css("background", "R=" + randNumber + " G="+randNumber + " B="+randNumber);
		});
});