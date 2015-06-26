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
        var modal_movie_height = $(".modal_movie").outerHeight(true);
        var modal_tit_height = $(".modal_tit").outerHeight(true);
        var modal_text_height = $(".modal_text").outerHeight(true);
        var modal_wrap_height = modal_movie_height + modal_text_height + modal_tit_height;
        $(".modal_wrap").css({height:modal_wrap_height});

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
		var title = t.eq(i).find('img').attr('title')
		var text = t.eq(i).find('img').attr('alt');
		modalWrap.find(".modal_movie").html("<iframe src='"+ href +"'>");
		modalWrap.find(".modal_tit").text(title);
		modalWrap.find(".modal_text").find('p').text(text);
		if(!overlay.is('.is-active')) {
			overlay.addClass('is-active').show();
		}
		else {
		}
	}

    /*-----------------
        高さを取得
    -----------------*/

});