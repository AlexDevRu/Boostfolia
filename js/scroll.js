$('.header-menu a').on('click', function(e){
	$('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top - 143 }, 1000);
	e.preventDefault();
});