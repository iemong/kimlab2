$(function(){
    $('.bxslider1').bxSlider({
        mode: 'horizontal',
        infiniteLoop: true,
        auto: true,
        controls: true,
        pager: false,
        speed:1500,
        pause:4000,
        minSlides: 3,
        maxSlides: 3,
        moveSlides:1,
        slideWidth:200,
        onSlideBefore: function($slideElement, oldIndex, newIndex){
        }
    });
});
//
$(window).load(function(){
    var t = $('.modalContent1'),
			overlay = $('.modal_overlay1'),
			modalWrap = $('.modal_wrap1'),
			prevBtn = $('.modal_btn-prev1'),
			nextBtn = $('.modal_btn-next1'),
			contentIndex = 0;
    overlay.hide();
    t.find('a').on('click', function(e){
		e.preventDefault();
		contentIndex = $(this).parent().index('.modalContent1');
        contentIndex = contentIndex % 3;
		showSlide(contentIndex);
        /*-----------------
            高さを取得
        -----------------*/
        var modal_movie_height = $(".modal_movie1").outerHeight(true);
        var modal_tit_height = $(".modal_tit1").outerHeight(true);
        var modal_text_height = $(".modal_text1").outerHeight(true);
        var modal_wrap_height = modal_movie_height + modal_text_height + modal_tit_height;
        $(".modal_wrap1").css({height:modal_wrap_height});
        return false;
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
		modalWrap.find(".modal_movie1").html("<iframe src='"+ href +"'>");
		modalWrap.find(".modal_tit1").text(title);
		modalWrap.find(".modal_text1").find('p').text(text);
		if(!overlay.is('.is-active')) {
			overlay.addClass('is-active').show();
		}
		else {
		}
	}
});