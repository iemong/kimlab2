$(function(){
	var t = $('.modalContent'),
			overlay = $('.modal_overlay'),
			modalWrap = $('.modal_wrap'),
			prevBtn = $('.modal_btn-prev'),
			nextBtn = $('.modal_btn-next'),
			contentIndex = 0;

	overlay.hide();

	t.find('a').on('click', function(e){
		e.preventDefault();
		contentIndex = $(this).parent().parent().index('.modalContent');
		showSlide(contentIndex);
	});
	prevBtn.on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		contentIndex = (contentIndex + 1) % t.size();
		showSlide(contentIndex);
	});
	nextBtn.on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		contentIndex = (contentIndex - 1) % t.size();
		showSlide(contentIndex);
	});
	modalWrap.on('click', function(e){
		e.stopPropagation();
	});
	overlay.on('click', function(){
		overlay.hide();
		overlay.removeClass('is-active');
	});

	function showSlide(i) {
		var href = t.eq(i).find('a').attr('href');
		modalWrap.html("<iframe src='"+ href +"'>");
		if(!overlay.is('.is-active')) {
			overlay.addClass('is-active').show();
		}
		else {
		}
	}

	$('#wrapper').tubular({
		videoId: '8wMoClW0KXY',
		});
});
