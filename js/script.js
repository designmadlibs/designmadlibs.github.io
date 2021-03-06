$(document).ready(function(){

    var pageURL = $(location).attr("href");

	$('.nav li').on("click", function() {

		var className = $(this).attr('class');

		if(pageURL.includes("about")){
			//var target = $('#'+className)
			window.location.replace("index.html#" +className);
		}
		else {
			var target = $('#'+className)
			$('html, body').animate({
		      scrollTop: target.offset().top
		    }, 1000);
		}
	});


	$('.mobile-nav').on("change", function () {
		var className=$(this).val();

		if(pageURL.includes("about")){
			//var target = $('#'+className)
			window.location.replace("index.html#" +className);
		}
		else {
			var target = $('#'+className)
			$('html, body').animate({
		      scrollTop: target.offset().top
		    }, 1000);
		}
	});


	$('.back-to-top').on("click", function() {
		var target = $('.logo')
	    $('html, body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	});


	$('.back-to-top').on("click", function() {
		var target = $('.logo')
	    $('html, body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	});


	$('.highlight').hover(function(e) {
		var number = $(this).attr('id');
		var idNumber = '#'+number
		var madLib = '#' + $(this).closest('.mad-lib').attr('id');

		$(madLib +' '+ idNumber).css("background-color",e.type === "mouseenter"?"#A8EEEA":"rgba(243, 243, 21, .5)")
	});

});









/*

    $('.nav li').on("click", function() {

	var className = $(this).attr('class');

	var target = $('#'+className)
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);


}); */
