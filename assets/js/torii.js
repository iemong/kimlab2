$(function(){
    $('.modal_overlay1').hide();
    $('.modal_overlay2').hide();
    $('.bxslider1').bxSlider({
        mode: 'horizontal',
        infiniteLoop: true,
        auto: true,
        controls: false,
        pager: false,
        speed:1500,
        pause:4000,
        minSlides: 3,
        maxSlides: 3,
        moveSlides:1,
        slideWidth:200,
        autoHover:true
    });
});

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
    $(".modal_close").on('click', function(){
        overlay.hide();
		overlay.removeClass('is-active');
    });
    $(".modalContent").hover(
        function(){
            modalTit = $(this).find('img').attr('title');
            sethover = setTimeout(function(){
                var addTit = $(".js-modalContent__tit").text(modalTit);
                $(".js-modalContent__tit").fadeIn(500);
            }, 500);

        },
        function(){
            $(".js-modalContent__tit").fadeOut(500);
            clearTimeout(sethover);
        }
    );
	function showSlide(i) {
		var href = t.eq(i).find('a').attr('href');
		var title = t.eq(i).find('img').attr('title');
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
