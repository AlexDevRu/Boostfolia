$('.footer-top a').on('click', function(e) {
	e.preventDefault();
	if($('.footer-map iframe').height() == 0)
		$('.footer-map iframe').animate({
			height: '450'}, 500);
	else
		$('.footer-map iframe').animate({
			height: '0'}, 500);
});