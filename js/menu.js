$('.header__burger').click(function(event) {
	$(this).toggleClass('active');
	if($(this).hasClass('active'))
		$('.header-menu').animate({
			right: '+=321'}, 300);
	else
		$('.header-menu').animate({
			right: '-=321'}, 300);
});