$('.header__burger').click(function(event) {
	$(this).toggleClass('active');
	if($(this).hasClass('active'))
		$('.header-menu').show("slow");
	else
		$('.header-menu').hide("slow");
});