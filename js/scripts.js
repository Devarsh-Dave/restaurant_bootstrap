//  js to operate carousel

$(document).ready(function() {
	$('#mycarousel').carousel({ interval: 2000 });
	$('#carouselButton').click(function() {
		if ($('#carouselButton').children('span').hasClass('fa-pause')) {
			$('#mycarousel').carousel('pause');
			$('#carouselButton').children('span').removeClass('fa-pause');
			$('#carouselButton').children('span').addClass('fa-play');
		} else if ($('#carouselButton').children('span').hasClass('fa-play')) {
			$('#mycarousel').carousel('cycle');
			$('#carouselButton').children('span').removeClass('fa-play');
			$('#carouselButton').children('span').addClass('fa-pause');
		}
	});

	$('#loginToggle').click(function() {
		$('#loginModal').modal('toggle');
	});
	$('#resvToggle').click(function() {
		$('#resvModal').modal('toggle');
	});
});

// //  Js to operate login and reserve buttons
// $(document).ready(function() {

// });
