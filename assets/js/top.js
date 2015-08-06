$(function(){
	$('#top .wrapper').tubular({
		videoId: 'jBfzUanJCd4',
		repeat: true
	});

	$('.js-top__next').each(function(){
        $(this).hover(
            function(){
                $(this).parent().next().animate({opacity:1.0},500);
                
            },
            function(){
                $(".fadeInImage").animate({opacity:0.0},500);
            }
        );
    });
    
	$('a[href^=#], area').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	//resize
	var wh = $(window).height();
	$('section').css({height:wh});
	$(window).on('resize', function(){
		wh = $(window).height();
		$('section').css({height:wh});
	});

	//toTop
	var topBtn = $('#page-top');
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
    $('.modal_overlay_top').hide();
});

$(window).load(function(){
    var t = $('.modalContent_top'),
        overlay = $('.modal_overlay_top'),
        modalWrap = $('.modal_wrap_top'),
        prevBtn = $('.modal_btn-prev_top'),
        nextBtn = $('.modal_btn-next_top'),
        contentIndex = 0;
    var kokoroe = $('.kokoroeWrap');
    overlay.hide();
    
    $('.toKokoroe').one('click', function(){
        kokoroe.show();
        
        var href = "//www.youtube.com/embed/wGXKOieJVns?rel=0&showinfo=0&autoplay=1&controls=0";
        //var title = t.eq(i).find('a').attr('title')
        //var text = t.eq(i).find('img').attr('alt');
        var setID = "ringo"
        modalWrap.find(".modal_movie_top").html("<iframe src='"+ href +"' id='"+ setID +"'>");
        modalWrap.find(".modal_tit_top").text("");
        modalWrap.find(".modal_text_top").find('p').text("");
        if(!overlay.is('.is-active')) {
            overlay.addClass('is-active').show();
        }
        else {
        }
        
        /*-----------------
            高さを取得
        -----------------*/
        var modal_movie_height = $(".modal_movie_top").outerHeight(true);
        var modal_tit_height = $(".modal_tit_top").outerHeight(true);
        var modal_text_height = $(".modal_text_top").outerHeight(true);
        var modal_wrap_height = modal_movie_height + modal_text_height + modal_tit_height;
        modalWrap.css({height:modal_wrap_height});
        
        
    });
    
    kokoroe.find(".modal_close").on("click", function(){
        kokoroe.fadeOut();
    });
    kokoroe.on("click", function(){
        kokoroe.fadeOut();
    });
    
    
    //-----------modal------------
    t.find('a').on('click', function(e){
        e.preventDefault();
        contentIndex = $(this).parent().index('.modalContent_top');
        contentIndex = contentIndex % 7;
        showSlide(contentIndex);
        /*-----------------
            高さを取得
        -----------------*/
        var modal_movie_height = $(".modal_movie_top").outerHeight(true);
        var modal_tit_height = $(".modal_tit_top").outerHeight(true);
        var modal_text_height = $(".modal_text_top").outerHeight(true);
        var modal_wrap_height = modal_movie_height + modal_text_height + modal_tit_height;
        $(".modal_wrap_top").css({height:modal_wrap_height});
        return false;
    });
    
    modalWrap.on('click', function(e){
        e.stopPropagation();
    });
    overlay.on('click', function(){
        overlay.hide();
        overlay.removeClass('is-active');
        $(".modal_movie_top").find("iframe").attr('src','');//for sound stop
    });
    $(".modal_close").on('click', function(){
        overlay.hide();
        overlay.removeClass('is-active');
        $(".modal_movie_top").find("iframe").attr('src','');//for sound stop
    });
    function showSlide(i) {
        var href = t.eq(i).find('a').attr('href');
        var title = t.eq(i).find('a').attr('title')
        var text = t.eq(i).find('img').attr('alt');
        modalWrap.find(".modal_movie_top").html("<iframe src='"+ href +"'>");
        modalWrap.find(".modal_tit_top").text(title);
        modalWrap.find(".modal_text_top").find('p').text(text);
        if(!overlay.is('.is-active')) {
            overlay.addClass('is-active').show();
        }
        else {
        }
    }
});
