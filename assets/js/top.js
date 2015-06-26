$(function(){
	$('#top .wrapper').tubular({
		videoId: 'jBfzUanJCd4'
	});

	$('#js-top__next').hover(
		function(){
			$(".fadeInImage").animate({opacity:1.0},500);
		},
		function(){
			$(".fadeInImage").animate({opacity:0.0},500);
		}
	);
	$('a[href^=#]').click(function(){
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

});
