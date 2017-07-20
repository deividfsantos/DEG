/*$(document).ready (function(){
	var offset = $('#menu-principal').offset().top;
	alert(offset);
	var $meuMenu = $('#menu-principal'); // guardar o elemento na memoria para melhorar performance

	$(document).on('scroll', function () {

	    if (offset <= $(window).scrollTop()) {
	    	
	        $meuMenu.addClass('fixar');
	    } else {
	        $meuMenu.removeClass('fixar');
	    }
	});
	
});*/
$(document).ready (function(){
	var offset = $('#menu-principal').offset().top;
	var $meuMenu = $('#menu-principal'); // guardar o elemento na memoria para melhorar performance
	var $meuMenu2 = $('#menu-links');
	var $meuMenu3 = $('#menu-links2');
	var $meuMenu4 = $('#menu-links3');

	$(document).on('scroll', function () {

	    if (offset <= $(window).scrollTop()) {

	   		//alert($(window).scrollTop());
			//alert($(window).scrollBottom());
	        $meuMenu.addClass('fixar');
	        $meuMenu2.addClass('fixar2');
	    	$meuMenu3.addClass('fixar2');
	    	$meuMenu4.addClass('fixar2');
	    } else  {
	        $meuMenu.removeClass('fixar');
	        $meuMenu2.removeClass('fixar2');
	    	$meuMenu3.removeClass('fixar2');
	    	$meuMenu4.removeClass('fixar2');
	    }
	});

	if (offset > 48) {
	    $meuMenu.addClass('fixar');
	    $meuMenu2.addClass('fixar2');
	   /* $meuMenu3.addClass('fixar2');
	    $meuMenu4.addClass('fixar2');*/
	} 
	
});




