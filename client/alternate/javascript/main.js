$(document).ready(function(){
	$(".screen2").hide();
	$(".screenPiano").hide();
	$(".screenDrums").hide();
	$(".screenViolin").hide();
	$(".screenGuitar").hide();


	$(".solo").click(function(){
		$(".screen1").fadeOut(250);
		$(".screen2").fadeIn(250);
	})


	$(".multi").click(function(){
		$(".screen1").fadeOut(250);
		$(".screen2").fadeIn(250);
	})

	$("#piano").click(function(){
		$(".screen2").fadeOut(250);
		setInterval(function(){
			$(".screenPiano").fadeIn(550);
		},1000);
	})

	$("#drums").click(function(){
		$(".screen2").fadeOut(250);
		$(".screenDrums").fadeIn(250);
	})

	$("#guitar").click(function(){
		$(".screen2").fadeOut(250);
		$(".screenGuitar").fadeIn(250);
	})

	$("#violin").click(function(){
		$(".screen2").fadeOut(250);
		$(".screenViolin").fadeIn(250);
	})

})