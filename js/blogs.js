Array.from($('.blogs-item__image')).forEach(
	elem => {
		let a = $(elem).find("a");
		$(elem).mouseenter(function() {
			a.first().animate({left: '50%'}, 200);
			a.last().animate({right: '50%'}, 200);
		}).mouseleave(function() {           
            a.first().animate({left: '0'}, 300);
			a.last().animate({right: '0'}, 300);
        });
	}
);