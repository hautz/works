$(document).ready(function() {
	
	$('.animsition').animsition();
	
	$('.page-top').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:0},300);
	});
	
	$(window).scroll(function(i){
		var scrollVar = $(window).scrollTop();
		$('.main section').css({'opacity':( 400-scrollVar )/400});
	})
	
});

//$(window).on("load",function() {
//	
//	$(window).scroll(function() {
//		$(".fade").each(function() {
//			var objectBottom = $(this).offset().top + $(this).outerHeight();
//			var windowBottom = $(window).scrollTop() + $(window).innerHeight();
//			if (objectBottom < windowBottom) {
//				if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//			} else {
//				if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//			}
//		});
//	}); $(window).scroll();
//	
//});