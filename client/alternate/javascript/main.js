$(document).ready(function(){
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
		$(".screenPiano").fadeIn(250);
	})

	$(".drums").click(function(){
		$(".screen2").fadeOut(250);
		$(".screenDrums").fadeIn(250);
	})

	$(".guitar").click(function(){
		$(".screen2").fadeOut(250);
		$(".screenGuitar").fadeIn(250);
	})

	$(".violin").click(function(){
		$(".screen2").fadeOut(250);
		$(".screenViolin").fadeIn(250);
	})

})