$(function(){
	$('#wrapper').tubular({
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

});
