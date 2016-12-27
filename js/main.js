$(document).ready(function() {
	
	$('.animsition').animsition();
	
	$('.page-top').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:0},300);
	});
	
});