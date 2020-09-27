$('.video-block__button, .video__button').click(function(event) {
	$(this).preventDefault();
	$("#video").modal('show');
});